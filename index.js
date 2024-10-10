//Generador de informes de gastos:
// Pautas:
// - Crea clases para `Expense` y `ExpenseReport`.
// - Implementa métodos para agregar gastos, calcular totales por categoría y generar un informe resumido.
// - Utiliza métodos de array como `filter` y `reduce` para procesar los datos.

class Expense {
    constructor (id, description, amount, category, date) {
        this.id = id
        this.description = description
        this.amount = amount
        this.category = category
        this.date = date
    }
}

class ExpenseReport {
    constructor () {
        this.expenses = []
    }

    addExpense (expense) {
        this.expenses.push(expense)
    }

    getTotalByCategory (category) {
        let initialValue = 0
        const totalByCategory = this.expenses
            .filter((expense) => expense.category === category)
            .reduce((total, expense) => total + expense.amount, initialValue)
        return totalByCategory
    }

    generateSummary () {
        const categories = []
        this.expenses.forEach((expense) => {
            if (!categories.some(category => category === expense.category)) {
              categories.push(expense.category);
            }
        })

        const summary = categories.map((category) => ({
            category,
            total: this.getTotalByCategory(category)
        }))

        return summary
    }

    showReport() {
        console.log("Reporte de Gastos:");
        this.expenses.forEach((expense) => {
          console.log(`- ${expense.date}: ${expense.description} - $${expense.amount.toFixed(2)} (${expense.category})`);
        })
      
        console.log("\nResumen por Categoría:");
        this.generateSummary().forEach((summary) => {
          console.log(`- ${summary.category}: $${summary.total.toFixed(2)}`);
        })
    }
}

//Datos iniciales:

const initialExpenses = [
    { id: 1, description: "Almuerzo de negocios", amount: 55.50, category: "Comida", date: "2024-03-01" },
    { id: 2, description: "Taxi al aeropuerto", amount: 30.00, category: "Transporte", date: "2024-03-02" },
    { id: 3, description: "Hotel", amount: 200.00, category: "Alojamiento", date: "2024-03-02" },
    { id: 4, description: "Cena con cliente", amount: 80.00, category: "Comida", date: "2024-03-03" },
    { id: 5, description: "Vuelo de regreso", amount: 350.00, category: "Transporte", date: "2024-03-04" }
]

//Uso de métodos

const report = new ExpenseReport();
initialExpenses.forEach((expense) => {
  const expenses = new Expense(expense.id, expense.description, expense.amount, expense.category, expense.date);
  report.addExpense(expenses);
})

const newExpense = new Expense(6, "Entrada al teatro", 150.00, "Entretenimiento", "2024-03-03")

report.addExpense(newExpense)

report.showReport()
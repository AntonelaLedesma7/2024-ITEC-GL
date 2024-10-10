// Gestor de inventario:

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product)
  }

  updateStock(id: number, newQuantity: number): void {
    const product = this.products.find((product) => product.id === id);
    if (product) {
        product.quantity = newQuantity;
    }
  }

  getTotalValue(): number {
    let initialValue = 0
    const totalValue = this.products.reduce((total, product) => total + product.quantity, initialValue)
    return totalValue
  }

  getLowStockProducts(threshold: number): Product[] {
    const  lowStockProducts: Product[] = this.products.filter((product) => product.quantity <= threshold)
    return lowStockProducts
  }
}

// Uso de métodos
const newInventory = new Inventory()

const product1: Product = {
    id:1,
    name: "Lapicera",
    price: 5.5,
    quantity:25
}

const product2: Product = {
    id:2,
    name: "Tijera",
    price: 10,
    quantity:78
}

newInventory.addProduct(product1)
newInventory.addProduct(product2)

const totalInventory = newInventory.getTotalValue()

const lowStock = newInventory.getLowStockProducts(30)

console.log(lowStock)
console.log(totalInventory)
console.log(newInventory)

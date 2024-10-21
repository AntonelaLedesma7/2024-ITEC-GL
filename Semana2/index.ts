// Analizador de Datos Genérico con Estadísticas Dinámicas

// Enunciado:
// Crea un analizador de datos genérico que pueda procesar diferentes tipos de estructuras de datos y generar estadísticas. El analizador debe ser capaz de calcular diferentes métricas según el tipo de datos: números (promedio, máximo, mínimo) o texto (longitud promedio, palabra más común). 

// Requisitos adicionales:
// - Implementa el análisis de datos numéricos y textuales con diferentes resultados estadísticos.
// - Asegúrate de manejar casos donde los datos estén vacíos, generando un error personalizado.
// - Permite agregar nuevos tipos de análisis en el futuro sin modificar la estructura existente.

interface NumericStats {
  average: number;
  max: number;
  min: number;
}

interface TextStats {
  averageLength: number;
  mostCommonWord: string;
}

function dataAnalyzer<T>(data: T[]) {
  let inicialValue = 0 
  if (data.length === 0){
    return { messaje: "No data provider" }
  }

  if(data.every(elem => typeof elem === "number")){
    const sum = data.reduce((accum, value) => accum + value, inicialValue);
    let average = sum / data.length;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const result: NumericStats = { average, max, min }
    return result
  }

  if(data.every(elem => typeof elem === "string")){
    const totalLength = data.reduce((accum, value) => accum + value.length, inicialValue);
    let averageLength = totalLength / data.length
    const wordCount: { [key: string]: number } = {}
    data.forEach(word => {
      wordCount[word] = (wordCount[word] | 0) + 1
    })
    const mostCommonWord = Object.keys(wordCount).reduce((a, b) => (wordCount[a] > wordCount[b] ? a : b))
    const result: TextStats =  { averageLength, mostCommonWord }
    return result
  }
  return { messaje: "Analysis failed" }
}

// Datos de ejemplo
const numbers = [1, 2, 3, 4, 5];
const words = ["hola", "mundo", "typescript", "es", "genial"];

console.log(dataAnalyzer<number>(numbers))
console.log(dataAnalyzer<string>(words))
console.log(dataAnalyzer([]))
console.log(dataAnalyzer([true, false, false]))
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

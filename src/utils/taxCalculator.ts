import { Products } from "../models/Product"


function  calculateTax(product: Products):number {
    const taxRate = 0.1;
    const totalPrice = product. price + product. price * taxRate;
    return totalPrice
}
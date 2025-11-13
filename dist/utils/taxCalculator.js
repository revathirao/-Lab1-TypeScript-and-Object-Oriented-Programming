import { Product } from "../models/Product.js";
export function calculateTax(product) {
    // const taxRate = 0.1;
    // const totalPrice = product. price + product. price * taxRate;
    // return totalPrice 
    // or you can write like
    return product.getPriceWithTax(0.1);
}
//# sourceMappingURL=taxCalculator.js.map
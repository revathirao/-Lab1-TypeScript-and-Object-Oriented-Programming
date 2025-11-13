import { Product } from "./models/Product.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
//Create a product instances
const pencil = new PhysicalProduct("P001", "Notebook", 20, 1.2);
const lamp = new PhysicalProduct("P002", "Lamp", 50, 3.5);
const eBook = new DigitalProduct("D001", "JavaScript eBook", 15, 5);
const storyBook = new DigitalProduct("D002", "Story Book", 25, 10);
// Create an array of mixed products
let products = [pencil, lamp, eBook, storyBook];
// Loop through the array
for (let i = 0; i < products.length; i++) {
    const product = products[i]; //!this value is not undefined or null.
    console.log("------------------------------------------------");
    console.log(product.displayDetails());
    console.log(`Final Price (with tax if applicable): $${calculateTax(product).toFixed(2)}`);
    console.log(product.getExtraInfo());
    console.log("------------------------------------------------");
}
//# sourceMappingURL=main.js.map
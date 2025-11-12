
import {Products} from "../src/models/Product
import  {PhysicalProduct} from "../src/models/PhysicalProduct"
import {DigitalProduct} from "../src/models/DigitalProduct"
import { calculateTax } from "./utils/taxCalculator.js";

//Create a product instances
const pencil = new PhysicalProduct("P001", "Notebook", 20, 1.2);
const lamp = new PhysicalProduct("P002", "Lamp", 50, 3.5);
const eBook  = new DigitalProduct("D001", "JavaScript eBook", 15, 5);
const storyBook  = new DigitalProduct("D002", "Story Book", 25, 10);


// Create an array of mixed products
let products: Products[] = [pencil, lamp, eBook, storyBook];

// Loop through the array
for (const product of products) {
  console.log(product.displayDetails());  

const finalPrice = calculateTax(product);
  console.log(`Final Price (with tax if applicable): $${finalPrice.toFixed(2)}`);

 console.log("-----------------------------------")
}

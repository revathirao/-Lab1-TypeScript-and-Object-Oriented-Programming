import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this.weight = weight;
    }
    // Override method to include 10% tax
    getPriceWithTax() {
        const taxRate = 0.1; // 10% tax rate
        const basePrice = super.getPriceWithTax(0.1); // Calls the parent's getPriceWithTax 
        return basePrice * (1 + taxRate);
    }
    // Getter method to return the formatted weight in kilograms 
    get formattedWeight() {
        return `${this.weight} kg`;
    }
    getExtraInfo() {
        return ` weight: ${this.formattedWeight}`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map
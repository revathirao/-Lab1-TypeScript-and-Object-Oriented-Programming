import { Product } from "./Product.js"

export class PhysicalProduct extends Product {
  weight: number;

  constructor(sku: string, name: string, price: number, weight: number) {
    super(sku, name, price);
    this.weight = weight;
  }
  // Override method to include 10% tax
  getPriceWithTax(): number {

    const taxRate = 0.1;// 10% tax rate
    const basePrice = super.getPriceWithTax(0.1); // Calls the parent's getPriceWithTax 
    return basePrice * (1 + taxRate);
  }

  // Getter method to return the formatted weight in kilograms 
  get formattedWeight(): string {
    return `${this.weight} kg`
  }

  override getExtraInfo(): string {
    return ` weight: ${this.formattedWeight}`;
  }



}

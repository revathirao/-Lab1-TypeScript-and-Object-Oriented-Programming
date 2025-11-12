import { Products } from "../models/Product"

 export class PhysicalProduct extends Products{
    weight:number;

    constructor(sku: string, name: string, price: number,  weight:number){
        super(sku,name, price);
        this.weight = weight;
    }
    // Override method to include 10% tax
  getPriceWithTax():number{

    const taxRate = 0.1;// 10% tax rate
    const basePrice = super.getPriceWithTax(); // Calls the parent's getPriceWithTax 

    return  basePrice * (1 + taxRate);
  }

   // Getter method to return the formatted weight in kilograms 
  get formattedWeight(): string {
    return  `${this.weight} kg`
  }



}

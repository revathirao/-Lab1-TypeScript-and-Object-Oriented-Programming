class PhysicalProduct extends Products{
    weight:number;

    constructor(sku: string, name: string, price: number,  weight:number){
        super(sku,name, price);
        this.weight = weight;
    }
    // Override method to include 10% tax
  getPriceWithTax():number{

    const taxRate

  }



}

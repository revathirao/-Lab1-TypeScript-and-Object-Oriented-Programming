export class Products{

    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number){
        this.sku= sku
        this.name= name
        this.price= price
    }

    displayDetails():String{
        return `${this.sku} ${this.name} costs $${this.price}.`;
    } 

    getPriceWithTax(texRate:number):number{
        return this.price + this.price  * texRate;
    }
}

// Exporting 
// export Products ;
// export default Products;
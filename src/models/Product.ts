export class Product {

    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku
        this.name = name
        this.price = price
    }

    displayDetails(): String {
        return `${this.sku} ${this.name} costs $${this.price}.`;
    }

    getPriceWithTax(texRate: number): number {
        return this.price + this.price * texRate;
    }
    // Default version — subclasses override this
    getExtraInfo(): string {
        return "";
    }
}


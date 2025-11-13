export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `${this.sku} ${this.name} costs $${this.price}.`;
    }
    getPriceWithTax(texRate) {
        return this.price + this.price * texRate;
    }
    // Default version — subclasses override this
    getExtraInfo() {
        return "";
    }
}
//# sourceMappingURL=Product.js.map
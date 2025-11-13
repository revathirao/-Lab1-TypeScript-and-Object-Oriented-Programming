// import { Product } from './Products.js'; 
import { Product } from "./Product";
export class DigitalProduct extends Product {
    fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price; // no tax for digital products
    }
    get formattedFileSize() {
        return `${this.fileSize} MB`;
    }
    getExtraInfo() {
        return `File-size: ${this.formattedFileSize}`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map
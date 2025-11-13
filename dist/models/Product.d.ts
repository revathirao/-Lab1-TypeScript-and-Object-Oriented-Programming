export declare class Product {
    sku: string;
    name: string;
    price: number;
    constructor(sku: string, name: string, price: number);
    displayDetails(): String;
    getPriceWithTax(texRate: number): number;
    getExtraInfo(): string;
}
//# sourceMappingURL=Product.d.ts.map
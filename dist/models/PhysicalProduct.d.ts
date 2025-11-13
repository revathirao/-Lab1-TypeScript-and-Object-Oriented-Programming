import { Product } from "./Product.js";
export declare class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(): number;
    get formattedWeight(): string;
    getExtraInfo(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map
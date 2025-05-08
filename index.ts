function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
        return input.toUpperCase();
    }
    return input;
}

function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    return items.filter(
        (item: { title: string; rating: number }) => item.rating > 4
    );
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce(
        (previousArray: T[], currentArray: T[]) => [
            ...previousArray,
            ...currentArray,
        ],
        []
    );
}

class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }

    public getInfo(): string {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}

class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
        super(make, year);
        this.model = model;
    }

    public getModel(): string {
        return `Model: ${this.model}`;
    }
}

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length;
    }

    return value * 2;
}

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    } else {
        return products.reduce(
            (prevProduct, currentProduct) =>
                currentProduct.price > prevProduct.price
                    ? currentProduct
                    : prevProduct,
            products[0]
        );
    }
}

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
}

function getDayType(day: Day): string {
    if (day === Day.Sunday) {
        return "Weekend";
    }

    return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        throw new Error("Negative number not allowed");
    } else {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    }
}

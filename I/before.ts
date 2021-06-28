namespace Before {

    interface Programmer {
        writeCode(): void
        eatPizza(slicesCount: number): void
    }

    class RegularProgrammer implements Programmer {
        constructor() {/*...*/ }
        writeCode(): void {/*...*/ }
        eatPizza(slicesCount: number): void {/*...*/ }
    }

    class Freelancer implements Programmer {
        constructor() {/*...*/ }
        writeCode(): void {/*...*/ }
        eatPizza(slicesCount: number): void {
            // emtpy method
        }
    }
}


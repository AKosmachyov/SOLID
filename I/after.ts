interface CodeProducer {
    writeCode(): void
}

interface PizzaConsumer {
    eatPizza(slicesCount: number): void
}

class RegularProgrammer implements CodeProducer, PizzaConsumer {
    constructor() {/*...*/ }
    writeCode(): void {/*...*/ }
    eatPizza(slicesCount: number): void {/*...*/ }
}

class Freelancer implements CodeProducer {
    constructor() {/*...*/ }
    writeCode(): void {/*...*/ }
}




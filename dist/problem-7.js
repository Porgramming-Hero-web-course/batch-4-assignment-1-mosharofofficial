"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge() {
        const thisYear = new Date().getFullYear();
        return thisYear - this.year;
    }
}

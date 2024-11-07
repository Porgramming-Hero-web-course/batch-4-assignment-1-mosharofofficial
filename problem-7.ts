class Car {
  constructor(public make: string, public model: string, public year: number) {}

  getCarAge() {
    const thisYear = new Date().getFullYear();
    return thisYear - this.year;
  }
}


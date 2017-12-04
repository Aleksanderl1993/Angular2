//***********************************************************

/*
export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }
}*/

//  zapis wyżej jest równoważny z tym niżej

//***********************************************************

export class Ingredient {
  constructor(public name: string, public amount: number) {}
}

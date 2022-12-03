export class Wish {
  public description: string;
  public completed: boolean;
  public id: number;

  constructor(description: string) {
    this.description = description;
    this.completed = false;
    this.id = 1;
  }
}

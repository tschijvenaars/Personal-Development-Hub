export class ToDo {
  public description: string;
  public completed: boolean;
  public id: number;

  constructor(description: string, completed: boolean) {
    this.description = description;
    this.completed = completed;
    this.id = 1;
  }
}

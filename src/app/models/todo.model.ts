export class ToDo {
  public description: string;
  public editedDescription: string;
  public completed: boolean;
  public id: string;

  constructor(description: string, editedDescription: string, completed: boolean, id: string) {
    this.description = description;
    this.editedDescription = editedDescription;
    this.completed = completed;
    this.id = id;
  }
}

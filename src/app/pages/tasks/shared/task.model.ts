export class Task {
  constructor(
    public id: number,
    public title: string,
    public description?: string,
    public done?: boolean,
    public deadline?: string
  ){}

  public get doneCheckBoxString(): string {
    return this.done ? '[x]' : '[ ]';
  }
}

export class Card {
  public id!: string;
  public title!: string;
  public buttonText!: string;
  public buttonNav!: string;


  constructor(init?: Partial<Card>) {
    Object.assign(this, init);
  }
}

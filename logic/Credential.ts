export class Credential {
  title!: string;
  subtitle!: string;
  description!: string;
  role!: string;
  url!: string;
  showWeb!: boolean;
  startedAt!: Date;
  isActive!: boolean;
  endedAt!: Date;

  constructor(init?: Partial<Credential>) {
    Object.assign(this, init);
  }
}

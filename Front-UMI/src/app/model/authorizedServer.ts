export class AuthorizedServer {
  id: number;
  ip: string;

  constructor(id: number, ip: string) {
    this.id = id;
    this.ip = ip;
  }
}

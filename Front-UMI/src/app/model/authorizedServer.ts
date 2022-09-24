export class AuthorizedServer {
  id: number;
  serverAddress: string;
  project_id: number;

  constructor(id: number, ip: string) {
    this.id = id;
    this.serverAddress = ip;
  }
}

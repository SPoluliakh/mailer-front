export interface ICredentials {
  name?: string;
  phone?: string;
  password?: string;
  email?: string;
}

export interface IAuth {
  response: string;
  status: number;
  token: string;
}

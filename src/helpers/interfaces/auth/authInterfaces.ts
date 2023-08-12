export interface ICredentials {
  name?: string;
  phone?: string;
  birthday?: string;
  password?: string;
  email?: string;
  skype?: string;
}

export interface IAuth {
  response: string;
  status: number;
  token: string;
}

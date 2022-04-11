export interface User {
  id: number;
  username: string;
  email: string;
  provider: string;
  confirmed: boolean;
  blocked: null | boolean;
  role: number;
  created_at: string;
  updated_at: string;
}

export interface Articles {
  id: number;
  title: string;
  body: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface Comment {
  id: number;
  messaged: string;
  user: User;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface AuthResult {
  jwt: string;
  user: User;
}

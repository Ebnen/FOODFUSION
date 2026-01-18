
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface AuthState {
  user: User | null;
  failedAttempts: Record<string, number>;
  lockoutUntil: Record<string, number>;
}

export interface Recipe {
  id: string;
  title: string;
  author: string;
  category: string;
  cuisine: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  dietary: string[];
  image: string;
  description: string;
  isCommunity?: boolean;
}

export interface CookingEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'Video' | 'PDF' | 'Infographic';
  description: string;
  thumbnail: string;
}

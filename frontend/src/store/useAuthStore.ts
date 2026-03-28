import { create } from 'zustand';

interface User {
  id: string;
  nome: string;
  email: string;
  tipo: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  login: (user: User, token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem('barber_user') || 'null'),
  token: localStorage.getItem('barber_token'),
  login: (user, token) => {
    localStorage.setItem('barber_user', JSON.stringify(user));
    localStorage.setItem('barber_token', token);
    set({ user, token });
  },
  logout: () => {
    localStorage.removeItem('barber_user');
    localStorage.removeItem('barber_token');
    set({ user: null, token: null });
  },
}));

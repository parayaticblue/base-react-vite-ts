

export  interface ProviderProps {
  children: React.ReactNode;
}


export interface AuthStateProps {
  logged: boolean;
}

interface User {
  id: string;
  name: string;
}

export interface AuthActionProps {
  type: string;
  payload?: User;
}

export interface AuthInitStateProps {
  logged: boolean;
  user: {
    id?: string;
    name?: string;
  }; 
}
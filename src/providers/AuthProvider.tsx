import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Types for state and actions
interface AuthState {
  isAuthenticated: boolean;
  user: any; // You can refine the type based on your user object
  accessToken: string | null;
}

interface AuthAction {
  type: "LOGIN" | "LOGOUT";
  payload?: { user: any; accessToken: string };
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
};

// Reducer function
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        isAuthenticated: true,
        user: action.payload?.user || null,
        accessToken: action.payload?.accessToken || null,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        user: null,
        accessToken: null,
      };
    default:
      return state;
  }
};

// Contexts
const AuthStateContext = createContext<AuthState | undefined>(undefined);
const AuthDispatchContext = createContext<React.Dispatch<AuthAction> | undefined>(undefined);

// Provider Component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

// Custom hooks for easy usage
export const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
};

export const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  }
  return context;
};

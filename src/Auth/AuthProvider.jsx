// estaba probando cosas!! pero no entiendo porque no funciona
 import { useContext, createContext, useState, useEffect } from "react";

interface AuthProviderProps{
    children: React.ReactNode
}
const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider({children}){

    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return(
        <AuthContext.Provider value= {{ isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
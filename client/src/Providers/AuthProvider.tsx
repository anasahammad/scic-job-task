import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, User, UserCredential } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

interface AuthProviderProps{
    children: React.ReactNode;
}

export type AuthContextType = {
    createUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  googleLogin: () => Promise<UserCredential>;
  logout: () => Promise<void>;
  user: User | null;
  loading: boolean;
}
export const AuthContext = createContext<AuthContextType | undefined>(undefined)
const googleProvider = new  GoogleAuthProvider()
const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email: string, password:string): Promise<UserCredential>=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email: string, password:string): Promise<UserCredential>=>{
            setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () : Promise<UserCredential>=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logout = (): Promise<void>=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            if(currentUser){
                console.log(currentUser)
                setUser(currentUser)
                setLoading(false)
            }else{
                setUser(null)
            }
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])
    const authInfo = {
        createUser,
        loginUser,
        loading,
        googleLogin,
        user,
        logout,
      
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
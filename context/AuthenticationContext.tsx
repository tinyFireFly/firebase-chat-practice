import React, { useState, useEffect, useContext, createContext } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut  } from "firebase/auth";
import { getFirebaseAuth, provider } from "../config/FirebaseApp"

const AuthenticationContext = createContext<any>({});

export const useAuthentication = () => useContext(AuthenticationContext);

export const AuthenticationProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

    useEffect(() => {
        const isSubscribed = onAuthStateChanged(getFirebaseAuth(), (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                });
            } else {
                setUser(null);
            }
        })
        setLoading(false);
    }, []);

    const login = () => {
        return signInWithPopup(getFirebaseAuth(), provider).catch(error => {
            console.log(error.message);
        })
    }

    const logout = async() => {
        setUser(null);
        await signOut(getFirebaseAuth());
    }

  return (
    <AuthenticationContext.Provider value={{ user, login, logout }}>
      {loading ? null : children}
    </AuthenticationContext.Provider>
  );
};
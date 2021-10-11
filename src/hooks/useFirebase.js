import { useEffect, useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
        const [user, setUser] = useState();

        // Call Auth And Provider:
        const auth = getAuth();
        const googleProvider = new GoogleAuthProvider();

        const signInUsingGoogle = () => {
                return signInWithPopup(auth, googleProvider)
        };

        const logOut = () => {
                signOut(auth)
                        .then(() => {
                                setUser({});
                        })
        }

        // Auth State Update:
        useEffect(() => {
                onAuthStateChanged(auth, user => {
                        if (user) {
                                setUser(user);
                        }
                })
        }, []);

        return {
                signInUsingGoogle,
                logOut,
                user
        };
};

export default useFirebase;
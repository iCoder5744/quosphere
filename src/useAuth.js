import { useState, useEffect } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase"; // Ensure correct path

const useAuth = () => {
  const [user, setUser] = useState(null); // ✅ Corrected

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser); // ✅ Ensures user is of type User or null
    });

    return () => unsubscribe();
  }, []);

  return { user };
};

export default useAuth;

import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { addAccessToken } from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  // ล็อคอินอยู่ไหม
  // {id:1 firstName: 'John', lastName: 'Doe', profileImage: ""}
  const [authUser, setAuthUser] = useState(null);

  // Modify header
  useEffect(() => {
    axios.get("/auth/me").then(res => {
        console.log(res.data)
        setAuthUser(res.data.user)
    })
  }, []);

  // submit form
  const login = async (credential) => {
    try {
      // backend ส่งมาเป็นอะไร -> accessToken, user
      const res = await axios.post("/auth/login", credential);
      addAccessToken(res.data.accessToken);
      setAuthUser(res.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    // obj ที่มี key ชื่อ login
    <AuthContext.Provider value={{ login, authUser }}>
      {children}
    </AuthContext.Provider>
  );
}

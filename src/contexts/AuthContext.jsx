import { useState } from "react";
import { createContext } from "react";
import axios from "../config/axios";
import { addAccessToken, getAccessToken} from "../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  // ล็อคอินอยู่ไหม
  // {id:1 firstName: 'John', lastName: 'Doe', profileImage: ""}
  const [authUser, setAuthUser] = useState(null); // { id, ... }
  // ส่ง context ไปที่ App/
  const [initialLoading, setInitailLoading] = useState(true)

  // Modify header  หลังจากโหลดข้อมูลเสร็จ
  useEffect(() => {
    if (getAccessToken()) {
      axios.get('/auth/me').then(res => {
        setAuthUser(res.data.user);
      }).finally(() => {
        setInitailLoading(false)
      })
      // ถ้าไม่มี token ให้ไม่ทำงาน loading
    } else{
      setInitailLoading(false)
    }
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

  const register = async registerInputObject => {
    const res = await axios.post('/auth/register', registerInputObject)
    addAccessToken(res.data.accessToken);
    setAuthUser(res.data.user)
  }

  return (
    // obj ที่มี key ชื่อ login
    <AuthContext.Provider value={{ login, authUser, initialLoading, register }}>
      {children}
    </AuthContext.Provider>
  );
}

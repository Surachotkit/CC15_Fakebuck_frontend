import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

//authUser ค่าเริ่มต้นเป็น null 
// ถ้าพยายามจะล็อคอิน authUser ที่อยู่ใน AuthContext มีค่าอยู่แล้ว(ล็อคอินอยู่แล้ว) ให้ไปหน้า home
export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  // console.log(authUser)
  if (authUser) {
    return <Navigate to="/" />;
  }
  return children;
}
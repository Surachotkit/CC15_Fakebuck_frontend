import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function RedirectIfAuthenticated({ children }) {
  const { authUser } = useAuth();
  // ถ้าพยายามจะล็อคอิน authUser ที่อยู่ใน AuthContext มีค่าอยู่แล้ว(ล็อคอินอยู่แล้ว) ให้ไปหน้า home
  console.log(authUser)
  if (authUser) {
    return <Navigate to="/" />;
  }
  return children;
}

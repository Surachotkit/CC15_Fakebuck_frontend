import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";


// destructuring obj (AuthContesxt)-> ต้องรู้ชื่อด้วย  // children คือ ระหว่าง tag เปิด - ปิด
export default function Authenticated({ children }) {
  const { authUser } = useAuth()
// ถ้าไม่มีรหัส ให้ไปหน้า login
  if (!authUser) {
    return <Navigate to="/login" />;

  }
  return children
}

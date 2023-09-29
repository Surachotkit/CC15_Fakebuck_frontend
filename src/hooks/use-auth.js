import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"

// ดึงค่าที่อยู่ใน AuthContext
export function useAuth(){
    return useContext(AuthContext)
}
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import { RightFromBracketIcon } from "../icon";
import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { useEffect } from "react";
import { useRef } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownEl = useRef(null) // {current : null}  **ค่าจะเก็บไว้ใน key ชื่อ curent อีกที


  // ข้อมูล หน้าตาเป็น obj
  const { logout, authUser } = useAuth(); // {id,firstName, LastName, profileImage, coverImage}

  // รันก็ต่อเมื่อ component dropdown เพิ่มเข้าไป
  useEffect(() => {
    console.log('effect',dropdownEl)
    // เรียกใช้ทุกครั้ง ที่คลิก **คลิกข้างนอก dropdown จะปิด
    const handleClickoutside = (e) => {
      // ถ้าไม่ได้อยู่ภายใน component dropdown 
      if(!dropdownEl.current.contains(e.target)){
        setIsOpen(false)
      }
    } 

    document.addEventListener("click", handleClickoutside);
    return () => {
      document.removeEventListener("click", handleClickoutside);
    };
  }, []);

  return (
  
    <div className="relative" ref={dropdownEl}>
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <Avatar src={authUser.profileImage}/>
      </div>

      {isOpen && (
        <div className=" w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2">
          <Link to={`/profile/${authUser.id}`} onClick={() => setIsOpen(false)}>
            <div className=" flex gap-4 p-2 items-center rounded-xl hover:bg-gray-200">
              <Avatar className="h-14" src={authUser.profileImage}/>
              <div>
                <div className="font-semibold">{authUser.firstName } {authUser.lastName}</div>
                <div className="text-sm text-gray-500">See your profile</div>
              </div>
            </div>
          </Link>
          <hr className="m-2 border" />
          {/* Logout */}
          <div
            className="flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl"
            onClick={logout}
          >
            <div className="bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
              <RightFromBracketIcon />
            </div>
            <div className="font-semibold text-sm">Log out</div>
          </div>
        </div>
      )}
    </div>
  );
}

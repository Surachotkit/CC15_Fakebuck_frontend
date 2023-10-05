import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../config/axios";
import { useAuth } from "../hooks/use-auth";

export default function ProfilePage() {
  const [profileUser, setProfileUser] = useState({});
  const [statusWithAuthUser, setStatusWithAuthUser] = useState("");
  const [profileFriends, setProfileFriends] = useState([])
  const { profileId } = useParams();

  const { authUser } = useAuth();
  // อัพ อัตโนมัติ
  const isAuthUser = authUser.id === +profileId;

  // send req
  // ถ้า profileId = authUser === อยู่ profile ตัวเอง
  // ถ้าไม่ใช่ เอาของคนอื่นมา
  // ถ้า authUser เปลี่ยน ให้อัพเดท authUser เปลี่ยน
  useEffect(() => {
    axios
      .get(`/user/${profileId}`)
      .then((res) => {
        setProfileUser(res.data.user);
        setStatusWithAuthUser(res.data.status);
        setProfileFriends(res.data.friends)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profileId]);
  return (
    <div className="bg-gradient-to-b from-gray-200 shadow pb-4">
      {profileUser ? (
        <>
          <ProfileCover
            coverImage={isAuthUser ? authUser.coverImage : profileUser?.coverImage}
          />
          <ProfileInfo
            profileUser={isAuthUser ? authUser : profileUser}
            statusWithAuthUser={statusWithAuthUser}
            setStatusWithAuthUser={setStatusWithAuthUser}
            profileFriends={profileFriends}
          />
        </>
      ) : (
        <h1 className="text-center p-8 text-3xl font-bold">
          404 !!! user not found
        </h1>
      )}
    </div>
  );
}

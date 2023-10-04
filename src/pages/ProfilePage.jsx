import ProfileCover from "../features/profile/ProfileCover";
import ProfileInfo from "../features/profile/ProfileInfo";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../config/axios";

export default function ProfilePage() {
  const [profileUser, setProfileUser] = useState({});
  const { profileId } = useParams();

  // send req
  useEffect(() => {
    axios
      .get(`/user/${profileId}`)
      .then((res) => {
        setProfileUser(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profileId]);
  return (
    <div className="bg-gradient-to-b from-gray-200 shadow pb-4">
      {profileUser ? (
        <>
          <ProfileCover coverImage={profileUser?.coverImage} />
          <ProfileInfo profileUser={profileUser} />
        </>
      ) : (
        <h1 className="text-center p-8 text-3xl font-bold">404 !!! user not found</h1>
      )}
    </div>
  );
}

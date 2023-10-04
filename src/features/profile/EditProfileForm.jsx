import Avatar from "../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";
import { useAuth } from "../../hooks/use-auth";
import { useState } from "react";
import Loading from '../../components/Loading'


export default function EditProfileForm({onSuccess}) {
  const [loading, setLoading] = useState(false)
  const { authUser,updateProfile } = useAuth();
  const uploadProfileImage = async(input) => {
    // FormData สามารถเก็บข้อมูลที่เป็นไฟล์(file) หรือในรูปแบบ ไบนารี่ 
    try{
      const formData = new FormData()
      formData.append("profileImage", input)
      setLoading(true)
      await updateProfile(formData)
      onSuccess()
    }catch(err){
      console.log(err)
    } finally {
      setLoading(false)
    }
  };
  const uploadCoverImage = async(input) => {
    try{
      const formData = new FormData()
      formData.append("coverImage", input)
      setLoading(true)
      await updateProfile(formData)
      onSuccess()
    }catch(err){
      console.log(err)
    } finally {
      setLoading(false)
    }
  

  };

  return (
    <div className="flex flex-col gap-4">
      {loading && <Loading />}
      {/* initialSrc={authUser.profileImage} --> เอารูปเก่ามาใช้ */}

      {/* profileImage */}
      <PictureForm
        title="Profile picture"
        initialSrc={authUser.profileImage}
        onSave={uploadProfileImage}
      >
        {/* props children  */}
        {/* callback ให้ return เป็น Avatar */}
        {(src, onClick) => (
          <div onClick={onClick}>
            <Avatar className="h-40" src={src} />
          </div>
        )}
      </PictureForm>

      {/* coverImage */}
      <PictureForm
        title="Cover photo"
        initialSrc={authUser.coverImage}
        onSave={uploadCoverImage}
      >
        {(src, onClick) => (
          <div
            className="aspect-[3/1] overflow-hidden rounded-md items-center justify-center"
            onClick={onClick}
          >
            <CoverImage src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}

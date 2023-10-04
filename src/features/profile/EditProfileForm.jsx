import Avatar from "../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";
import { useAuth } from "../../hooks/use-auth";
import axios from "axios";

export default function EditProfileForm() {
  const { authUser } = useAuth();
  const uploadProfileImage = (input) => {
    // FormData สามารถเก็บข้อมูลที่เป็นไฟล์(file) หรือในรูปแบบ ไบนารี่ 
    console.log(input)
  };
  const uploadCoverImage = (input) => {
    console.log(input)

  };

  return (
    <div className="flex flex-col gap-4">
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

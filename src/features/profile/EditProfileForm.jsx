import Avatar from "../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";

export default function EditProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <PictureForm title="Profile picture">
        <Avatar className="h-40" />
      </PictureForm>

      <PictureForm title="Cover photo">
        <div className="aspect-[3/1] overflow-hidden rounded-md items-center justify-center">
          <CoverImage />
        </div>
      </PictureForm>
    </div>
  );
}

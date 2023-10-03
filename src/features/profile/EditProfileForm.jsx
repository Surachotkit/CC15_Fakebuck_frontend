import Avatar from "../../components/Avatar";
import CoverImage from "./CoverImage";
import PictureForm from "./PictureForm";

export default function EditProfileForm() {
  return (
    <div className="flex flex-col gap-4">
      <PictureForm title="Profile picture">
        {/* props children  */}
        {/* callback ให้ return เป็น Avatar */}
        {(src) => <Avatar className="h-40" src={src} />}
      </PictureForm>

      <PictureForm title="Cover photo">
        {(src) => (
          <div className="aspect-[3/1] overflow-hidden rounded-md items-center justify-center">
            <CoverImage src={src} />
          </div>
        )}
      </PictureForm>
    </div>
  );
}

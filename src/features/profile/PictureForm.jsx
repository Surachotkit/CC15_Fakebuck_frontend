import Avatar from "../../components/Avatar";
import FormButton from "./FormButton";

export default function PictureForm({ title, children }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          <FormButton>Edit</FormButton>
        </div>
      </div>
      <div className="flex justify-center">{children}</div>
    </div>
  );
}

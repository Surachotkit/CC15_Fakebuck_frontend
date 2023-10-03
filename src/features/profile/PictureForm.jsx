import { useRef } from "react";
import Avatar from "../../components/Avatar";
import FormButton from "./FormButton";
import { useState } from "react";

export default function PictureForm({ title, children }) {
  //เก็บรูป ที่ user เลือกใช้
  const [file, setFile] = useState(null);
  if (file) console.log(URL.createObjectURL(file));
  const inputEl = useRef(null);
  return (
    <div>
      <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={(e) => {
          // รูปมีมั้ย ถ้ามีให้เก็บ
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <div className="flex justify-between items-center">
        <h5 className="text-xl font-bold">{title}</h5>
        <div>
          {file && (
            <>
              <FormButton>Save</FormButton>
              {/* กด cancel */}
              <FormButton
                onClick={() => {
                  inputEl.current.value = "";
                  setFile(null);
                }}
              >
                Cancel
              </FormButton>
            </>
          )}
          <FormButton onClick={() => inputEl.current.click()}>Edit</FormButton>
        </div>
      </div>
      {/* file มีค่าไหม ถ้ามีให้ convert ถ้าไม่มี null */}
      <div className="flex justify-center">
        {children(file ? URL.createObjectURL(file) : undefined)}
      </div>
    </div>
  );
}

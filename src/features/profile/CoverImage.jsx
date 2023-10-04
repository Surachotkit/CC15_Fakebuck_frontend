import defaultImage from "../../assets/img.jpg";
export default function CoverImage({ src  }) {
  return <img src={src || defaultImage} alt="cover" />
}

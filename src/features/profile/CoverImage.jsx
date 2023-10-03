import defaultImage from "../../assets/img.jpg";
export default function CoverImage({ src = defaultImage }) {
  return <img src={src} alt="" />
}

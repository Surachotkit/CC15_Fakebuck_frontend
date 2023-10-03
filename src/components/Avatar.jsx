import defaultImage from "../assets/blank.png";

export default function Avatar({ className = "h-10", src = defaultImage }) {
  const defaultClass = "rounded-full aspect-square";
  // เอาค่า default กับ classname เชื่อมกัน
  const classes = defaultClass + " " + className;
  
  return <img src={src} alt="user" className={classes} />;
}

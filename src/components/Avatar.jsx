import defaultImage from "../assets/blank.png";

export default function Avatar({ className = "h-10" }) {
  const defaultClass = "rounded-full aspect-square";
  // เอาค่า default กับ classname เชื่อมกัน
  const classes = defaultClass + " " + className;
  return <img src={defaultImage} alt="user" className={classes} />;
}

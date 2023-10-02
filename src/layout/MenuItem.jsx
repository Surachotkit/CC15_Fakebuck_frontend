import { Link } from "react-router-dom";
import { HouseIcon } from "../icon";

export default function MenuItem({to, Icon}) {
  return (
    <Link to={to}>
    <div className="px-10 py-2 rounded-lg hover:bg-gray-200">
      <Icon className="fill-gray-500" />
    </div>
    
    </Link>
  );
}

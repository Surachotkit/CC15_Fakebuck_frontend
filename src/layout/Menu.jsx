import { useLocation } from "react-router-dom";
import { HouseIcon, UserGroupIcon } from "../icon";
import MenuItem from "./MenuItem";

// ถ้าเป็น path / จะเป็นสีน้ำเงิน
const menus = [
  { id: 1, to: "/", Icon: HouseIcon },
  { id: 2, to: "/friend", Icon: UserGroupIcon },
];

export default function Menu() {
  const { pathname } = useLocation();

  return (
    <nav className="flex justify-center items-center gap-2">
      {menus.map((el) => (
        <MenuItem
          key={el.id}
          to={el.to}
          Icon={el.Icon}
          active={pathname === el.to}
        />
      ))}

      {/* <MenuItem to="/" Icon={HouseIcon} />
        <MenuItem to="/friend" Icon={UserGroupIcon} /> */}
    </nav>
  );
}

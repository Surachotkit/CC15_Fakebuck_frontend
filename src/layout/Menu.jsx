import { HouseIcon, UserGroupIcon } from "../icon";
import MenuItem from "./MenuItem";

const menus = [
  { id: 1, to: "/", Icon: HouseIcon },
  { id: 2, to: "/friend", Icon: UserGroupIcon },
];

export default function Menu() {
  return (
    <nav className="flex justify-center items-center gap-2">
      {menus.map((el) => (
        <MenuItem key={el.id} to={el.to} Icon={el.Icon} />
      ))}

      {/* <MenuItem to="/" Icon={HouseIcon} />
        <MenuItem to="/friend" Icon={UserGroupIcon} /> */}
    </nav>
  );
}

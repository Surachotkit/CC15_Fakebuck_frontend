import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { EllipsisIcon } from "../../icon";
import fomatTimeAgo from '../../utils/time-ago'

export default function PostHeader({ postObj }) {
  return (
    <div className="flex gap-3">
      <Link to={`/profile/${postObj.user.id}`}>
        <Avatar src={postObj.user.profileImage} />
      </Link>
    
      {/* คลิกชื่อแล้ว link ไปได้ */}
      <div className="flex flex-col flex-1">
        <Link
          to={`/profile/${postObj.user.id}`}
          className="hover:underline text-sm font-semibold self-start"
        >
          {postObj.user.firstName} {postObj.user.lastName}
        </Link>
        <small className="text-gray-500 text-xs">{fomatTimeAgo(postObj.createdAt)}</small>
      </div>

      {/* Edit */}
      <div className="relative">
        <div className="h-8 w-8 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-full flex items-center justify-center">
          <EllipsisIcon className="fill-gray-500" />
        </div>
        {/* Dropdown */}
        <ul className="bg-lime-500 absolute right-0 translate-y-1 border rounded-lg p-2 shadow w-36 hidden">
          <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
            Edit
          </li>
          <li className="hover:bg-gray-200 rounded-lg p-2 text-sm font-semibold cursor-pointer">
            Delete
          </li>
        </ul>
      </div>
    </div>
  );
}

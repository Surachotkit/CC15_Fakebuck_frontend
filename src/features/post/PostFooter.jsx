import React from "react";
import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from "../../icon";
import ActionButton from "./ActionButton";
import { useAuth } from "../../hooks/use-auth";

export default function PostFooter({ postObj }) {
  const { totalLike, likes } = postObj;
  const { authUser} = useAuth()
  // ถ้าเคยกด like -> true / ถ้าไม่มี -> false
  // likes -->  [ {userId: 1}, {userId: 2}]
  // authUser.id == userId:1   ถ้าไม่เจอ -> undefined 
  const isLiked = likes.find(el => el.userId === authUser.id)
  return (
    <div>
      <div className="flex justify-between items-center pb-2">
        {/* ถ้ากด like > 0 ให้มี like แต่ถ้าไม่มี ให้รูป like หายไป */}
        {totalLike > 0 && (
          <div className="flex gap-1 items-center">
            <div className="bg-blue-500 h-5 w-5 rounded-full flex items-center justify-center">
              <ThumbsUpIcon />
            </div>
            <span className="text-xm text-gray-500">{totalLike}</span>
          </div>
        )}

        <span className="text-sm text-gray-500 hover:underline cursor-pointer">
          8 comment
        </span>
      </div>

      <hr />
      <div className="flex gap-2 py-1">

        <ActionButton active={isLiked}>
          <div className="flex justify-center gap-2">
            <ThumbsUpAltIcon className={isLiked ? 'fill-blue-500' : 'fill-gray-500'} />
            <span>Like</span>
          </div>
        </ActionButton>

        <ActionButton>
          <div className="flex justify-center items-center gap-2">
            <MessageIcon className="fill-gray-500" />
            <span>Comment</span>
          </div>
        </ActionButton>
      </div>
    </div>
  );
}

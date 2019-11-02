import React from "react";
import { useStore } from "@leocode/rxstores-react";
import avatar from "./avatar.svg";

export const UserAvatar = () => {
  const [user, methods] = useStore(UserStore);

  const loadingText = "User is coming out from hyperspace";

  return (
    <div className="avatar">
      <header className="avatar-header">
        <div className="user-avatar">
          <img src={avatar} className="avatar-svg" alt="avatar" />
          <p className="user-name">
            {methods.isDataLoading ? loadingText : user.name}
          </p>
        </div>
      </header>
    </div>
  );
};

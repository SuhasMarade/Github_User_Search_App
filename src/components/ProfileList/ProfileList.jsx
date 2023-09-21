import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import './ProfileList.css';
import useProfileList from "../../hooks/useProfileList";

function AvatarList () {
    const [avatarResult, setAvatarResult] = useProfileList()

   
    return (
       <div className="profile-list-wrapper">
           <div className="profile-wrapper">
              {(avatarResult.isLoading)? <h1 id="loading">Loading...</h1>: avatarResult.avatarList.map((p) => <Profile key={p.id} id={p.id} name={p.userName} image={p.avatar} />)}
           </div>
        </div>
    );
}

export default AvatarList;
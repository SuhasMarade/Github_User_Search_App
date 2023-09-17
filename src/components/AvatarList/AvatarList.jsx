import { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import axios from 'axios';
import './AvatarList.css'
function AvatarList () {
    const [avatarResult, setAvatarResult] = useState({
        avatarList: [],
        isLoading: true,
        avatarListUrl: 'https://api.github.com/users'
    })

   async function downloadAvatar() {
      setAvatarResult((state) => ({
        ...state, isLoading: true
      }))
      const response = await axios.get(avatarResult.avatarListUrl)

      const profileData = response.data;
      console.log(profileData);
      const profileDataResult = profileData.map((user) => {
        return {
            id: user.id,
            userName: user.login,
            avatar: user.avatar_url

        }
      })
      console.log(profileDataResult);
      setAvatarResult((state) => ({
        ...state, avatarList: profileDataResult, isLoading: false
      }))
    }

    useEffect(() => {
        downloadAvatar()
    },[avatarResult.avatarListUrl])
    
    return (
       <div className="profile-list-wrapper">
           <div className="profile-wrapper">
              {(avatarResult.isLoading)? "Loading...": avatarResult.avatarList.map((p) => <Profile key={p.id} id={p.id} name={p.userName} image={p.avatar} />)}
           </div>
        </div>
    );
}

export default AvatarList;
import { useState, useEffect } from "react";
import axios from "axios";

function useProfileList() {
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

    return [avatarResult, setAvatarResult]
}

export default useProfileList;
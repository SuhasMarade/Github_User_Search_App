import { useState, useEffect } from "react";
import axios from "axios";

function useProfileList() {
  // state variable object which takes profileList, isloading and profileListUrl as its properties
    const [profileResult, setProfileResult] = useState({
        profileList: [],
        isLoading: true,
        profileListUrl: 'https://api.github.com/users'
    })

   async function downloadProfile() {
      try {
        setProfileResult((state) => ({
          ...state, isLoading: true
        }))

        // get data fetched from api
        const response = await axios.get(profileResult.profileListUrl)

        // get data array from response
        const profileData = response.data;
        console.log(profileData);


        // iterate over profileData array to give array of object
        const profileDataResult = profileData.map((user) => {
          return {
              id: user.id,
              userName: user.login,
              avatar: user.avatar_url

          }
        })
        console.log(profileDataResult);

        // set required data to profileResult
        setProfileResult((state) => ({
          ...state, profileList: profileDataResult, isLoading: false
        }))

        
      } catch (error) {
        console.log(`Something went wrong, ${error.message}`)
      }

    }

    useEffect(() => {
        downloadProfile()
    },[profileResult.profileListUrl])

    return [profileResult, setProfileResult]
}

export default useProfileList;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useProfileDetails(searchUser) {
    const name = useParams();
    const userName = name.name;
 
    const [profileDetails, setProfileDetails] = useState({
        profileDetailsList: {},
        isLoading: true,
    })
    async function downloadProfileDetails() {
        setProfileDetails((state) => ({
            ...state, isLoading: true
        }))

        let response = '';

        if(searchUser){
            response = await axios.get(`https://api.github.com/users/${searchUser}`)
        }
        else {
            response = await axios.get(`https://api.github.com/users/${userName}`)
        }
       
        console.log(response.data);
        const profileDetailsData = response.data;
        
        setProfileDetails((state) => ({
            ...state, profileDetailsList: {
                name: profileDetailsData.name,
                username: profileDetailsData.login,
                followers: profileDetailsData.followers,
                avatar: profileDetailsData.avatar_url,
                id: profileDetailsData.id,
                following: profileDetailsData.following
            },
            isLoading: false
        }))
    }
    console.log(profileDetails.profileDetailsList)
    useEffect(() => {
        downloadProfileDetails()
    },[])
    return [profileDetails, setProfileDetails]
}

export default useProfileDetails
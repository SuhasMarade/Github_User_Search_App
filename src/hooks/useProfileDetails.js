import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function useProfileDetails(searchUser) {
    const name = useParams(); //Get name object fetched from on click on profile
    const userName = name.name; //Extracting username from name object
 
    const [profileDetails, setProfileDetails] = useState({
        profileDetailsList: {},
        isLoading: true,
    })

    async function downloadProfileDetails() {
        try {
            setProfileDetails((state) => ({
                ...state, isLoading: true
            }))
            // It downloads data single user using username variable
            let response = '';
           
            if(searchUser){
                // It takes username from search bar
                response = await axios.get(`https://api.github.com/users/${searchUser}`)
            }
            else {
                // It takes username from default 30 profile from home page
                response = await axios.get(`https://api.github.com/users/${userName}`)
            }
           
            console.log(response.data);
            const profileDetailsData = response.data;
            
            // set profile details and isloading false because data downloaded
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
            
        } catch (error) {
            console.log(`Something went wrong, ${error.message}`)
        }

    }
    console.log(profileDetails.profileDetailsList)
    useEffect(() => {
        downloadProfileDetails()
    },[])
    return [profileDetails, setProfileDetails]
}

// exporting this custom hook
export default useProfileDetails
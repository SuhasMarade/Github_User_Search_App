import Profile from "../Profile/Profile";
import './ProfileList.css';
import useProfileList from "../../hooks/useProfileList";

function ProfileList () {
    // Use custom hook to make code looks clean
    const [profileResult] = useProfileList()

   
    return (
       <div className="profile-list-wrapper">
           <div className="profile-wrapper">
              {(profileResult.isLoading)? <h1 id="loading">Loading...</h1>: profileResult.profileList.map((p) => <Profile key={p.id} id={p.id} name={p.userName} image={p.avatar} />)}
           </div>
        </div>
    );
}

export default ProfileList;
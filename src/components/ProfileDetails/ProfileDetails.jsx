
import useProfileDetails from "../../hooks/useProfileDetails";
import './ProfileDetails.css';

function ProfileDetails ({searchUser}) {
    // Use custom hook to make code looks clean
    const [profileDetails] = useProfileDetails(searchUser)

    return (
        <div className="profile-details-wrapper">
            <div className="profile-details-img-wrapper">
                <img src={profileDetails.profileDetailsList.avatar} alt="avatar-img" />
            </div>
            <div className="profile-details-info">
                <h3 className="profile-details-heading"><span>Name</span>: {profileDetails.profileDetailsList.name}</h3>
                <p className="profile-details-username"><span>Username</span>: {profileDetails.profileDetailsList.username}</p>
                <p className="profile-details-followers"><span>followers</span>: {profileDetails.profileDetailsList.followers}</p>
                <p className="profile-details-following"><span>following</span>: {profileDetails.profileDetailsList.following}</p>
            </div>
        </div>
    );
}

export default ProfileDetails;
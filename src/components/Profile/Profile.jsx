import './Profile.css';

function Profile({id, name, image}) {
    return ( 
        <div className="profile">
            <img src={image} alt="avatar" />
            <h3>{name}</h3>
        </div> 
    )
}

export default Profile;
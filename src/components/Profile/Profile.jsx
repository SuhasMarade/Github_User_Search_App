import { Link } from 'react-router-dom';
import './Profile.css';

function Profile({id, name, image}) {
    return ( 
        <div className="profile-border">
            <Link to={`users/${name}`}>
                <div className='profile' >
                <img src={image} alt="avatar" />
                <h3 className='username'>{name}</h3>
                </div>
            </Link>
        </div> 
    )
}

export default Profile;
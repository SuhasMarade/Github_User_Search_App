import AvatarList from "../AvatarList/AvatarList"
import Search from "../Search/Search"
import './Avatar.css';

function Avatar() {
    return (
        <div className="avatar-wrapper">
           <Search/> 
           <AvatarList/>
        </div>
    )
}
export default Avatar
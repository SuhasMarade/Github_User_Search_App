import { useState } from "react";
import ProfileList from "../ProfileList/ProfileList"
import Search from "../Search/Search"
import './Avatar.css';
import ProfileDetails from "../ProfileDetails/ProfileDetails";

function Avatar() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <div className="avatar-wrapper">
           <Search updateSearchBar={setSearchTerm}/>

           {(!searchTerm.length)? <ProfileList/>: <ProfileDetails key={searchTerm} searchUser={searchTerm}/>} 
           
        </div>
    )
}
export default Avatar
import {Routes, Route} from 'react-router-dom'
import ProfileDetails from '../components/ProfileDetails/ProfileDetails'
import Avatar from '../components/Avatar/Avatar';
function CustomRoutes () {
    // It provides routing 
    // here decide which path for what then It gives link element which anchor tag but for single page 
    return (
        <Routes>
            <Route path='/' element= {<Avatar/>}/>
            <Route path='users/:name' element = {<ProfileDetails/>}/>
        </Routes>
    )
}

export default CustomRoutes;
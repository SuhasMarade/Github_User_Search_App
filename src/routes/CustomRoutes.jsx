import {Routes, Route} from 'react-router-dom'
import ProfileDetails from '../components/ProfileDetails/ProfileDetails'
import Avatar from '../components/Avatar/Avatar';
function CustomRoutes () {
    return (
        <Routes>
            <Route path='/' element= {<Avatar/>}/>
            <Route path='users/:name' element = {<ProfileDetails/>}/>
        </Routes>
    )
}

export default CustomRoutes;
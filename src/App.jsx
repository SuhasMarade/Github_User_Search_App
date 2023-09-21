import './App.css'
import CustomRoutes from './routes/CustomRoutes'
import {Link} from 'react-router-dom'

function App() {

  return (
    <div className='outer-avatar'>
      <h1 id='avatar-heading'>
        <Link to='/'>Avatar</Link>
      </h1>
     <CustomRoutes/>
    </div>
  )
}

export default App

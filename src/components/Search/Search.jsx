import useDebounce from '../../hooks/useDebounce';
import './Search.css';
import {FaSistrix} from 'react-icons/fa'
import { IconContext } from "react-icons";

function Search({updateSearchBar}) {
    const debounceCallback = useDebounce((e) => updateSearchBar(e.target.value))
    return (
        // IconContext.provider take properties of fontawesome component in value and apply it
        <IconContext.Provider value={{ color: "#13005A" , size: '35px'}}>
            <div className="search-wrapper">

                <input type="text" 
                id='home-search-bar'
                placeholder="Search here..."
                onChange={debounceCallback}/>

                <FaSistrix className='search-icon'/>
                
            </div>
        </IconContext.Provider>
    );

}
export default Search
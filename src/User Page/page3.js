import React, {useEffect, useState} from "react";
import axios from "axios"; 
import './App.css';
import { Link } from 'react-router-dom';
import FullProfile from './fullprofile';

const BASE_URL = 'https://dummyapi.io/data/api/user?page=3';
const APP_ID = '5fdc894f4ad9ac7917020921';

const Home = () => {
    const [api, setAPI] = useState([]);
    const [show, setShow]= useState(false);

    useEffect(() => {
        axios.get(`${BASE_URL}`, { headers: { 'app-id': APP_ID } })
        .then(({ data }) => setAPI(data.data))
        .catch(console.error)
    }, []);
    
    return (
        <div>
          <div className="Page">
                <Link class="pagenum" to="/User Page/page1">
                    <li>1</li>
                </Link>
                <Link class="pagenum" to="/User Page/page2">
                    <li>2</li>
                </Link>
            </div>
        <div className="App">
           {api.length>0 &&api.map(user=>(
             <div key={user.id}>
               <div class="user">
                    <img src={user.picture} alt={user.picture}/>
                    <h2>{user.firstName}</h2>
                    <button class="button" onClick={() => setShow(!show)}>Show Profile</button>
                    {show &&<FullProfile key={user.id} user={user}/>}
                </div>
             </div>
           ))}
           {JSON.stringify(api)}
        </div>
        </div>
    );
};
export default Home;
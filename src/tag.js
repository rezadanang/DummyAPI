import React, {useEffect, useState} from "react";
import axios from "axios"; 
import './App.css';

const BASE_URL = 'https://dummyapi.io/data/api/tag?limit=48';
const APP_ID = '5fdc894f4ad9ac7917020921';

const Home = () => {
    const [api, setAPI] = useState([]);

    useEffect(() => {
        axios.get(`${BASE_URL}`, { headers: { 'app-id': APP_ID } })
        .then(({ data }) => setAPI(data.data))
        .catch(console.error)
    }, []);
    
    return (
        <div className="App">
           {api.length>0 &&api.map(tag=>(
             <div key={tag}>
                <div className="tags">
                    <h2>#{tag}</h2>
                </div>
             </div>
           ))}
        </div>
    );
};
export default Home;
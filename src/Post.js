import React, {useEffect, useState} from "react";
import axios from "axios"; 
import './App.css';

const BASE_URL = 'https://dummyapi.io/data/api/post/';
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
           {api.length>0 &&api.map(post=>(
             <div key={post.id}>
               <div class="postcard">
                  <h2>{post.owner.firstName} {post.owner.lastName}</h2>
                  <p>{post.owner.email}</p>
                  <img width="20%" src={post.image} alt={post.image}/>
                  <h2>#{post.tags.join(' #')}</h2>
                  <h2>{post.text}</h2>
                  <h3>{post.likes} Likes</h3>
                </div>
              </div>
           ))}
        </div>
    );
};
export default Home;
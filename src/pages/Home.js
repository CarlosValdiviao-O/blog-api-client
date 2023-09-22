import { useEffect, useState } from 'react';
import Card from '../components/Card';
import NavBar from '../components/NavBar';
const serverLink = require('../components/serverLink');

const Home = () => {

    const [ posts, setPosts ] = useState(null);

    useEffect(() => {
        const aux = async () => {
            let data = await fetchPosts();
            setPosts(data.posts);
        } 
        aux();        
    }, []);
    
    const fetchPosts = async () => {
        let res = await fetch(`${serverLink}`);
        return res.json();
    }

    return (
        <div id='home'>
            <NavBar></NavBar>
            <div className='greet-div'>
                <h1 className='greet'>Welcome To My Blog</h1>
            </div>
            <h3>Posts</h3>
            <div className='posts'>
                {posts ? 
                posts.map((post, index)=> {
                    return(
                        <Card post={post} key={index}></Card>
                    )
                }):
                <p>Searching for posts...</p>}  
                {posts && posts.length == 0 && <p>No posts found</p>}
            </div>
        </div>
    );
};

export default Home;
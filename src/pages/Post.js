import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import "../components/Post.css";
const serverLink = require('../components/serverLink');

const Post = () => {

    const { id } = useParams();
    const [ title, setTitle ] = useState('');
    const [ sections, setSections ] = useState([]);
    const [ images, setImages ] = useState([]);
    const [ paragraphs, setParagraphs ] = useState([]);
    
    useEffect(() => {
        const aux = async () => {
            let data = await fetchPost();
            setTitle(data.post.title);
            setSections(data.post.sections);
            setImages(data.post.images);
            setParagraphs(data.post.paragraphs);
        } 
        aux();
    }, []);

    const fetchPost = async () => {
        let res = await fetch(`${serverLink}/post/${id}`);
        return res.json();
    }

    return (
        <div>
            <NavBar></NavBar>
            <div className='post'>
                <h1 className='title'>{title}</h1>
                {sections.map((section, index) => {
                    if (section.contentType === 'paragraph')
                    return(
                        <div key={index} className='section'>
                            {paragraphs[section.index].header !== undefined ?
                                <h3 className='header'>
                                    {paragraphs[section.index].header}
                                </h3>
                                : ''
                            }
                            <p className='paragraph'>{paragraphs[section.index].text}</p>
                        </div>                       
                    )
                    if (section.contentType === 'image')
                    return(
                        <div key={index} className='section'>
                            {images[section.index].header !== undefined ? 
                                <h3 className='header'>
                                    {images[section.index].header}
                                </h3>
                                : ''
                            }    
                            {images[section.index].url !== undefined ?                        
                                <div className='preview'>
                                    <img src={images[section.index].url} alt={images[section.index].name}></img>
                                </div>
                                : ''
                            }
                        </div>
                    )
                })}
                <div className='comment-box'>
                    <p>Build a component for this</p>
                </div>
            </div>
        </div>
    );
}

export default Post;
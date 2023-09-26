import { useEffect, useState } from 'react';
import Comment from '../components/Comment';
const serverLink = require('../components/serverLink');

const Comments = (props) => {
    const { id, comments, setComments } = props;

    useEffect(() => {
        const aux = async () => {
            let data = await fetchComments();
            setComments(data.comments);
        } 
        aux();
    }, []);

    const fetchComments = async () => {
        let res = await fetch(`${serverLink}/post/${id}/comments`);
        return res.json();
    }

    return (
       <div className='comments-wrapper'>
            <h3>Comments</h3>
                <div className='comments'>
                    {comments ? 
                    comments.map((comment, index)=> {
                        return(
                            <Comment comment={comment} key={index} />
                        )
                    }):
                    <p>Searching for comments...</p>}  
                    {comments && comments.length == 0 && <p>No comments found</p>}
                </div>
       </div> 
    )

}

export default Comments;
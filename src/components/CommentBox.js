import { useState } from "react";
const serverLink = require('../components/serverLink');

const CommentBox = (props) => {

    const { id, setPostStatus, comments, setComments } = props;
    const [ author, setAuthor ] = useState('');
    const [ text, setText ] = useState('');
    const [ formatErrors, setFormatErrors ] = useState([]);

    const postComment = async () => {
        let comment = {
            author: author || 'Unknown',
            text,
            post: id,
        };

        let fetchOptions = {
            method: "POST",  
            redirect: 'manual',  
            mode: 'cors',        
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
            body: JSON.stringify(comment),
        };
        setPostStatus('Posting...');
        setFormatErrors([]);
        let link = `${serverLink}/post/${id}/comment`;
        try {
            let res = await fetch(link, fetchOptions);
            if (!res.ok) {
                setPostStatus('Something went wrong ><');
                let error = await res.text();
                console.log(error);
            }
            let responseData = await res.json();
            if (responseData.status === 'published') {
                setPostStatus('Published!');
                let newComments = comments;
                newComments.push(comment);
                setComments(state => [ ...newComments])
            }
            else if (responseData.status === 'error') {
                setPostStatus('Fix format errors before publishing');
                setFormatErrors(state => [ ...responseData.errors])
            }
        }
        catch (error) {
            setPostStatus('Something went wrong ><');
            console.error(error);
        }

        setTimeout(() => {
            setPostStatus('');
        }, 5000)

    }

    return (
        <form className="comment-box">
            <h3>Post a comment</h3>
            <input className="author" type='text'
                maxLength={30} placeholder="Name"
                onChange={(e) => setAuthor(e.target.value)}>
            </input>
            <div className='grow-wrap'>
                <textarea className="text" maxLength={800}
                    placeholder="Comment" rows={1}
                    onChange={(e) => setText(e.target.value)}
                    onInput={(e) => e.target.parentNode.dataset.replicatedValue = e.target.value}>
                </textarea>
            </div>
            <button type="button"
                onClick={postComment}>Submit
            </button>
            <ul className='errors'>
                {formatErrors.map((err, index) => {
                    return(
                        <li key={index}>{err.msg}</li>
                    )
                })}
            </ul>
        </form>
    )
}

export default CommentBox;
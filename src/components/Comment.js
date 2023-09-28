
const serverLink = require('../components/serverLink');

const Comment = (props) => {
    const { comment } = props;

    return (
        <div className='comment'>
            <h3>{comment.author}</h3>
            <p>{comment.text}</p>
            <p className='date'>{comment.createdAt ? new Date(comment.createdAt).toDateString() : new Date().toDateString()}</p>      
        </div>
    )
}

export default Comment;
import { Link } from 'react-router-dom';
import "./Card.css";

const Card = (props) => {
    const { post } = props;
    
    return (
        <div className='card'>
            <Link to={`/post/${post._id}`}>
                <h3>{post.title}</h3>
                <p>{post.preview}</p>
            </Link>               
        </div>
    )
}

export default Card
import { Link } from 'react-router-dom';
import "./Card.css";

const Card = (props) => {
    const { post } = props;
    const serverLink = require('./serverLink');

    return (
        <div className='card'>
            <Link to={`/post/${post._id}`}>
                <h3>{post.title}</h3>
                <p>{post.paragraphs[0].text.substring(0, 150)}</p>
            </Link>               
        </div>
    )
}

export default Card
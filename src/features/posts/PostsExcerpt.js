import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ postId }) => {
    const post = useSelector((state) => selectPostById(state, postId));
    
    return (
        <article>
            <h2>{post.title}</h2>
            <p className='excerpt'>{post.body.substring(0, 75)}...</p>
            <p className="postCredit">
                <Link to={`/posts/${post.id}`} className="button muted-button">View Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}
export default PostsExcerpt
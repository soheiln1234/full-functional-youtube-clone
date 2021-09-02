import "./_comments.scss";
import Comment from "../Comment/Comment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addComment,
  getCommentsOfVideoById,
} from "../../redux/actions/comments.action";
import { useState } from "react";
import numeral from "numeral";

const Comments = ({ videoId, totalComments }) => {
  const [text, setText] = useState("");

  const handleComment = (event) => {
    event.preventDefault();
    if (text.length === 0) {
      return;
    }
    dispatch(addComment(videoId, text));
    setText("");
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCommentsOfVideoById(videoId));
  }, [dispatch, videoId]);

  const comments = useSelector((state) => state.commentList.comments);

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  );

  const user = useSelector((state) => state.auth?.user);

  return (
    <div className="comments">
      <p>{numeral(totalComments).format("0.a")} Comments</p>
      <div className="comments__form d-flex w-100 my-2">
        <img
          src={user?.photoURL}
          alt="profile"
          className="rounded-circle mr-3"
        />
        <form onSubmit={handleComment} className="d-flex flex-grow-1">
          <input
            type="text"
            className="flex-grow-1"
            placeholder="Wrte a comment ...."
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button className="border-0 p-2">Comment</button>
        </form>
      </div>
      <div className="comments__list">
        {_comments?.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Comments;

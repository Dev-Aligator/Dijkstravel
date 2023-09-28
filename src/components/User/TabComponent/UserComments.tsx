import { AxiosInstance } from "axios";
import { useEffect, useState } from "react";
import { Place, Review } from "../../Interface/InterfaceCollection";
import Rating from "@mui/material/Rating";
interface UserCommentProps {
  client: AxiosInstance;
}

const UserComments = ({ client }: UserCommentProps) => {
  const [comments, setComments] = useState<Review[]>([]);
  const [places, setPlaces] = useState<Place[]>([]);
  useEffect(() => {
    const reuqestAction = "GetAllUserReviews";
    const apiUrl = `/api/get/reviews/?action=${reuqestAction}`;

    client
      .get(apiUrl)
      .then(function (res) {
        setComments(res.data["user_total_reviews"]);
        setPlaces(res.data["places_data"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="user-comments-container">
      <div className="wrapper">
        {comments.map((comment, index) => (
          <div className="box">
            <i className="fas fa-quote-left quote"></i>
            <p className="user-comment-text">{comment.text}</p>
            <div className="content">
              <div className="info">
                <div className="name">{places[index].name}</div>
                <div className="job">{comment.relative_time_description}</div>
                <div className="stars">
                  <Rating
                    name="size-small"
                    value={comment.rating}
                    size="small"
                    readOnly
                  />
                </div>
              </div>
              <div className="image">
                <img src={places[index].photo} alt=""></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserComments;

import "../../styles/PlaceDetailsModal.css";
import { Place, PlaceDetails, Review } from "../Interface/InterfaceCollection";
import { Star } from "react-ionicons";
import { likeIcon, userDefaultAvatat } from "../../assets";
import { AxiosInstance } from "axios";
import { useState } from "react";

interface PlaceModalProps {
  setOpenPlaceModal: React.Dispatch<React.SetStateAction<boolean>>;
  placeDetails: [Place | null, PlaceDetails | null, Review[]];
  setPlaceDetails: React.Dispatch<
    React.SetStateAction<[Place | null, PlaceDetails | null, Review[]]>
  >;
  client: AxiosInstance;
}
const PlaceModal = ({
  setOpenPlaceModal,
  placeDetails,
  setPlaceDetails,
  client,
}: PlaceModalProps) => {
  const handleUpdateLikes = (
    reviewId: string,
    setReviewLikes: React.Dispatch<React.SetStateAction<number>>
  ) => {
    client
      .get(`/api/post/update_review_likes/?reviewId=${reviewId}`)
      .then(function (res) {
        setReviewLikes(res.data["likes"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [formData, setFormData] = useState({
    reviewText: "", // Initialize the reviewText field
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const dataToSend = {
      reviewText: formData.reviewText,
      placeId: placeDetails[0]?.googleMapId,
    };

    // You can access the form data in the formData object
    try {
      // Send a POST request to the specified API endpoint
      await client
        .post(`/api/post/add_review/`, dataToSend)
        .then(function (res: any) {
          console.log(res.data);
        });

      // Optionally, reset the form after successful submission
      setFormData({
        reviewText: "",
      });

      // Handle success or redirect to another page if needed
    } catch (error) {
      // Handle errors, e.g., show an error message to the user
      console.error("Error:", error);
    }

    // Now you can use reviewText as needed, for example, send it to an API
  };
  return (
    <div className="real-container">
      <div
        className="modalBackgroundPlace"
        onClick={() => {
          setOpenPlaceModal(false);
        }}
      ></div>
      <div className="place-details-section">
        <div className="place-details-body">
          <div className="place-details-container">
            <div className="post">
              <div className="post__header place-details-header">
                <div className="header__left">
                  <a href="#">
                    <img
                      src={placeDetails[0]?.photo}
                      className="post__author-pic"
                    />
                  </a>
                  <div className="post__author author">
                    <span className="author__name">
                      <a href="#">{placeDetails[0]?.name}</a>
                    </span>
                    <i className="author__verified"></i>
                  </div>
                  <span className="post__date">
                    <a href="#">October 13, 2020</a>
                  </span>
                  <span className="post__date-privacy-separator">&nbsp;·</span>
                  <i className="post__privacy"></i>
                </div>
                <div className="header__right">
                  <div className="post__options options">
                    <i className="options__icon"></i>
                  </div>
                </div>
              </div>
              {/* <!-- POST CONTENT --> */}
              <div className="post__content content">
                <p className="content__paragraph">
                  Facebook's Oculus Quest 2 starts shipping today! It's another
                  big step forward for VR. I've been using mine all summer and
                  I'm looking forward to more of you experiencing this.
                </p>
                <img
                  src={placeDetails[0]?.photo.replace(
                    "s1600-w400",
                    "s1600-w800"
                  )}
                  className="content__image"
                />
              </div>
              {/* <!-- POST FOOTER --> */}
              <div className="post__footer footer">
                {/* <!-- Reactions --> */}
                <div className="footer__reactions reactions">
                  <div className="reactions__emojis emojis">
                    <span className="emojis__count">
                      <a href="#">193 </a>
                      <Star
                        color={"#f8e45c"}
                        title={""}
                        height="25px"
                        width="25px"
                      ></Star>
                    </span>
                  </div>
                  <div className="reactions__comments-shares comment-shares">
                    <span className="comment-shares__comments">
                      <a href="#">50K Reviews</a>
                    </span>
                  </div>
                </div>
                {/* <!-- Buttons --> */}
                <div className="footer__buttons buttons">
                  <span className="buttons__like like">
                    <i className="like__icon"></i>Like
                  </span>
                  <span className="buttons__comment comment">
                    <i className="comment__icon"></i>Review
                  </span>
                  <span className="buttons__share share">
                    <i className="share__icon"></i>Save
                  </span>
                </div>
                {/* <!-- Comments --> */}
                <div className="footer__comments comments">
                  {/* <!-- Comments filter --> */}
                  <div
                    className="comments__filter filter"
                    onClick={handleSubmit}
                  >
                    Most Relevant<i className="filter__icon"></i>
                  </div>
                  {/* <!-- Comments box --> */}
                  <div className="comments__box box">
                    <div className="box__profile profile">
                      <img src={userDefaultAvatat} className="profile__pic" />
                    </div>
                    <div className="box__bar bar">
                      <input
                        type="text"
                        name="reviewText"
                        placeholder="Write a review..."
                        className="bar__input"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  {/* <!-- Friend comment --> */}
                  <div className="comment_section">
                    {placeDetails[2].map((review, i) => {
                      const [reviewLikes, setReviewLikes] = useState(
                        review.likes
                      );
                      return (
                        <div
                          className={`comments__friend-comment friend-comment comment-${i}`}
                        >
                          <img
                            src={
                              review.profile_photo_url
                                ? review.profile_photo_url
                                : ""
                            }
                            className="friend-comment__pic"
                          />
                          <div className="friend-comment__comment comment">
                            <a href="#" className="comment__author">
                              {review.author_name}
                            </a>
                            <span className="comment__content">
                              {review.text}
                            </span>

                            {review.likes != 0 && (
                              <div className="comment__reactions reactions">
                                <img
                                  src={likeIcon}
                                  className="reactions__emojis reactions__like"
                                />
                                <span className="reactions__count">
                                  {reviewLikes}
                                </span>
                              </div>
                            )}

                            <div className="comment__links links">
                              <span>
                                <a
                                  onClick={() => {
                                    handleUpdateLikes(
                                      review.id,
                                      setReviewLikes
                                    );
                                  }}
                                  className="links__like"
                                >
                                  Like
                                </a>{" "}
                                &#183;
                              </span>
                              <span>
                                <a href="#" className="links__date">
                                  {review.relative_time_description}
                                </a>
                              </span>
                            </div>
                          </div>
                          <div className="friend-comment__options options">
                            <i className="options__icon options__comment"></i>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* <!-- More comments --> */}
                  <div className="comments__more-comments more-comments">
                    <span className="more-comments__link">
                      <a href="#">View more comments</a>
                    </span>
                    <span className="more-comments__count">1 of 42,098</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceModal;

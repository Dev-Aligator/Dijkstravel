import "../../styles/PlaceDetailsModal.css";
import { Place, PlaceDetails, Review } from "../Interface/InterfaceCollection";
import { Star } from "react-ionicons";
import { likeIcon, userDefaultAvatat } from "../../assets";
import { AxiosInstance } from "axios";
import { useState } from "react";
import PlacesDetailsInfo from "./PlacesDetailsInfo";

interface PlaceModalProps {
  setOpenPlaceModal: React.Dispatch<React.SetStateAction<boolean>>;
  placeDetails: [Place | null, PlaceDetails | null, Review[], String];
  client: AxiosInstance;
}
const PlaceModal = ({
  setOpenPlaceModal,
  placeDetails,
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

  const handleGoogleMapDirectionRedirect = (locationCoordinates: string) => {
    const locationCoordinatesJsonFormat = JSON.parse(locationCoordinates);
    const locationLatitude = locationCoordinatesJsonFormat["lat"];
    const locationLongitude = locationCoordinatesJsonFormat["lng"];
    // Simulate a mouse click:
    const DirecttionRedirectUrl = `https://www.google.com/maps?saddr=My+Location&daddr=${locationLatitude},${locationLongitude}`;
    return DirecttionRedirectUrl;
  };

  const [formData, setFormData] = useState({
    reviewText: "", // Initialize the reviewText field
  });

  const [newReview, setNewReview] = useState<Review | null>(null);
  const stars = Array.from({ length: 5 }, (_, i) => i);
  const [selectedStar, setSelectedStar] = useState(5);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    const dataToSend = {
      reviewText: formData.reviewText,
      star: selectedStar,
      placeId: placeDetails[0]?.googleMapId,
    };

    try {
      const res = await client.post(`/api/post/add_review/`, dataToSend);
      setNewReview(res.data["new_review"]);

      // Optionally, you can reset the reviewText in your form after successful submission
      setFormData({ reviewText: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const ShortenNumberOfReview = (
    totalReviews: number | null | undefined
  ): string => {
    if (totalReviews === null || totalReviews == undefined) {
      return "0";
    }

    if (totalReviews < 1000) {
      return totalReviews.toString();
    } else if (totalReviews < 1000000) {
      const thousands = Math.floor(totalReviews / 1000);
      return `${thousands}K`;
    } else {
      const millions = Math.floor(totalReviews / 1000000);
      return `${millions}M`;
    }
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
                    <a href="#">{placeDetails[3]}</a>
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
                  {placeDetails[1] && placeDetails[0] && (
                    <PlacesDetailsInfo
                      placeDetails={placeDetails[1]}
                      place={placeDetails[0]}
                    ></PlacesDetailsInfo>
                  )}
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
                    <span className="emojis__count"></span>
                  </div>
                  <div className="reactions__comments-shares comment-shares">
                    <span className="comment-shares__comments">
                      <a href="#">
                        {ShortenNumberOfReview(placeDetails[1]?.totalReviews)}{" "}
                        Reviews
                      </a>
                    </span>
                  </div>
                </div>
                {/* <!-- Buttons --> */}
                <div className="footer__buttons buttons">
                  <span
                    className="buttons__like like"
                    onClick={() => {
                      if (placeDetails[0]?.location) {
                        window.open(
                          handleGoogleMapDirectionRedirect(
                            placeDetails[0]?.location
                          ),
                          "_blank"
                        );
                      }
                    }}
                  >
                    <i className="like__icon"></i>Explore
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
                  {/* <div className="comments__filter filter">
                    Most Relevant<i className="filter__icon"></i>
                  </div> */}
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
                        onKeyDown={handleKeyPress}
                      />
                      <div className="bar__emojis emojis">
                        {stars.map((index) => (
                          <span
                            className={
                              index + 1 == selectedStar
                                ? "emojis__insert active insert"
                                : "emojis__insert insert"
                            }
                          >
                            <i
                              className="review__star"
                              onClick={() => {
                                setSelectedStar(index + 1);
                              }}
                            >
                              {index + 1}
                              <Star
                                color={"#f8e45c"}
                                title={""}
                                height="15px"
                                width="15px"
                              ></Star>
                            </i>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* <!-- Friend comment --> */}
                  <div className="comment_section">
                    {newReview && (
                      <div
                        className={`comments__friend-comment friend-comment comment-new}`}
                      >
                        <img
                          src={
                            newReview.profile_photo_url
                              ? newReview.profile_photo_url
                              : ""
                          }
                          className="friend-comment__pic"
                        />
                        <div className="friend-comment__comment comment">
                          <a href="#" className="comment__author">
                            {newReview.author_name}
                          </a>
                          <span className="comment__content">
                            {newReview.text}
                          </span>

                          {newReview.likes != 0 && (
                            <div className="comment__reactions reactions">
                              <img
                                src={likeIcon}
                                className="reactions__emojis reactions__like"
                              />
                              {/* <span className="reactions__count">
                                  {reviewLikes}
                                </span> */}
                            </div>
                          )}

                          <div className="comment__links links">
                            <span>
                              <a className="links__like">Like</a> &#183;
                            </span>
                            <span>
                              <a className="links__reply">
                                {newReview.rating}🌟
                              </a>
                              &#183;
                            </span>

                            <span>
                              <a href="#" className="links__date">
                                Just now
                              </a>
                            </span>
                          </div>
                        </div>
                        <div className="friend-comment__options options">
                          <i className="options__icon options__comment"></i>
                        </div>
                      </div>
                    )}

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
                          <div
                            className="friend-comment__comment comment"
                            key={i}
                          >
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
                                <a className="links__reply">
                                  {review.rating}🌟
                                </a>
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

import "../../styles/PlaceDetailsModal.css";
import { Place, PlaceDetails } from "../Interface/InterfaceCollection";
import { Star } from "react-ionicons";
interface PlaceModalProps {
  setOpenPlaceModal: React.Dispatch<React.SetStateAction<boolean>>;
  placeDetails: [Place | null, PlaceDetails | null];
}
const PlaceModal = ({ setOpenPlaceModal, placeDetails }: PlaceModalProps) => {
  console.log(placeDetails);
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
                  <div className="comments__filter filter">
                    Most Relevant<i className="filter__icon"></i>
                  </div>
                  {/* <!-- Comments box --> */}
                  <div className="comments__box box">
                    <div className="box__profile profile">
                      <img
                        src="images/profile-pic.jpg"
                        className="profile__pic"
                      />
                    </div>
                    <div className="box__bar bar">
                      <input
                        type="text"
                        placeholder="Write a review..."
                        className="bar__input"
                      />
                    </div>
                  </div>
                  {/* <!-- Friend comment --> */}
                  <div className="comments__friend-comment friend-comment">
                    <img
                      src="images/friend-pic.jpg"
                      className="friend-comment__pic"
                    />
                    <div className="friend-comment__comment comment">
                      <a href="#" className="comment__author">
                        Justin Miller
                      </a>
                      <span className="comment__content">
                        It sure feels different to see you on a different color
                        T-shirt, but still, technology advances everytime and we
                        are glad that you're a part of it.
                      </span>
                      <div className="comment__reactions reactions">
                        <img
                          src="images/like.svg"
                          className="reactions__emojis reactions__like"
                        />
                        <img
                          src="images/haha.svg"
                          className="reactions__emojis reactions__haha"
                        />
                        <img
                          src="images/love.svg"
                          className="reactions__emojis reactions__love"
                        />
                        <span className="reactions__count">70</span>
                      </div>
                      <div className="comment__links links">
                        <span>
                          <a href="#" className="links__like">
                            Like
                          </a>{" "}
                          &#183;
                        </span>
                        <span>
                          <a href="#" className="links__reply">
                            Reply
                          </a>{" "}
                          &#183;
                        </span>
                        <span>
                          <a href="#" className="links__date">
                            16w
                          </a>
                        </span>
                      </div>
                      <div className="comment__replies replies">
                        <i className="replies__emoji"></i>
                        <span className="replies__count">17 Replies</span>
                      </div>
                    </div>
                    <div className="friend-comment__options options">
                      <i className="options__icon options__comment"></i>
                    </div>
                  </div>

                  <div className="comments__friend-comment friend-comment">
                    <img
                      src="images/friend-pic.jpg"
                      className="friend-comment__pic"
                    />
                    <div className="friend-comment__comment comment">
                      <a href="#" className="comment__author">
                        Justin Miller
                      </a>
                      <span className="comment__content">
                        It sure feels different to see you on a different color
                        T-shirt, but still, technology advances everytime and we
                        are glad that you're a part of it.
                      </span>
                      <div className="comment__reactions reactions">
                        <img
                          src="images/like.svg"
                          className="reactions__emojis reactions__like"
                        />
                        <img
                          src="images/haha.svg"
                          className="reactions__emojis reactions__haha"
                        />
                        <img
                          src="images/love.svg"
                          className="reactions__emojis reactions__love"
                        />
                        <span className="reactions__count">70</span>
                      </div>
                      <div className="comment__links links">
                        <span>
                          <a href="#" className="links__like">
                            Like
                          </a>{" "}
                          &#183;
                        </span>
                        <span>
                          <a href="#" className="links__reply">
                            Reply
                          </a>{" "}
                          &#183;
                        </span>
                        <span>
                          <a href="#" className="links__date">
                            16w
                          </a>
                        </span>
                      </div>
                      <div className="comment__replies replies">
                        <i className="replies__emoji"></i>
                        <span className="replies__count">17 Replies</span>
                      </div>
                    </div>
                    <div className="friend-comment__options options">
                      <i className="options__icon options__comment"></i>
                    </div>
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

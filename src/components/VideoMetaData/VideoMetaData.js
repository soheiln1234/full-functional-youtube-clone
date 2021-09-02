import moment from "moment";
import numeral from "numeral";
import { useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { MdThumbUp, MdThumbDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import ShowMoreText from "react-show-more-text";
import "./_videometadata.scss";
import {
  checkSubscriptionStatus,
  getChannelDetails,
} from "../../redux/actions/channel.action";

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;

  const subscriptionStatus = useSelector(
    (state) => state.channelDetails.subscriptionStatus
  );

  const { viewCount, likeCount, dislikeCount } = statistics;
  const dispatch = useDispatch();

  const { snippet: channelSnippet, statistics: channelStatistics } =
    useSelector((state) => state.channelDetails.channel);

  useEffect(() => {
    dispatch(getChannelDetails(channelId));
    dispatch(checkSubscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className="videoMetaData py-2">
      <div className="videoMetaData__top">
        <h5>{title}</h5>
        <div className="d-flex justify-content-between align-items-center py-1">
          <span>
            <AiFillEye /> {numeral(viewCount).format("0.a")} Views •{" "}
            <span> {moment(publishedAt).fromNow()}</span>
          </span>
          <div>
            <span className="mr-3">
              <MdThumbUp size={26} />
              {numeral(likeCount).format("0.a")}
            </span>
            <span className="mr-3">
              <MdThumbDown size={26} />
              {numeral(dislikeCount).format("0.a")}
            </span>
          </div>
        </div>
      </div>

      <div className="videoMetaData__channel d-flex justify-content-between align-items-center my-2 py-3">
        <div className="d-flex">
          <img
            src={channelSnippet?.thumbnails?.default?.url}
            alt=""
            className="rounder-circle mr-3"
          />
          <div className="d-flex flex-column">
            <span>{channelTitle}</span>
            <span>
              {numeral(channelStatistics?.subscriberCount).format("0.a")}{" "}
              Subscribers
            </span>
          </div>
        </div>
        <button
          className={`btn border-o p-2 m-2 ${subscriptionStatus && "btn-gray"}`}
        >
          {subscriptionStatus ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      <div className="videoMetaData__description">
        <ShowMoreText
          lines={3}
          more="show more"
          less="show less"
          anchorClass="showMoreText"
          expanded={false}
        >
          {description}
        </ShowMoreText>
      </div>
    </div>
  );
};

export default VideoMetaData;

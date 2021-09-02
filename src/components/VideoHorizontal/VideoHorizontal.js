import "./_videohorizontal.scss";

import moment from "moment";
import numeral from "numeral";

import { LazyLoadImage } from "react-lazy-load-image-component";

import request from "../../api";

import { AiFillEye } from "react-icons/ai";
import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const VideoHorizontal = ({ video, searchScreen, subScreen }) => {
  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);
  const [channelIcon, setChannelIcon] = useState(null);

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      thumbnails: { medium },
      publishedAt,
      resourceId,
    },
  } = video;

  const isVideo = !(id.kind === "youtube#channel" || subScreen);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format("mm:ss");

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await request("/videos", {
        params: {
          part: "contentDetails,statistics",
          id: id.videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    if (isVideo) {
      get_video_details();
    }
  }, [id, isVideo]);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await request("/channels", {
        params: {
          part: "snippet",
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };

    get_channel_icon();
  }, [channelId]);

  const history = useHistory();
  const _channelId = resourceId?.channelId || channelId;

  const handleClick = () => {
    isVideo
      ? history.push(`/watch/${id.videoId}`)
      : history.push(`/channel/${_channelId}`);
  };

  const thumbnail = !isVideo && "videoHorizontal__thumbnail-channels";

  return (
    <Row
      className="videoHorizontal m-1 py-2 align-items-center"
      onClick={handleClick}
    >
      <Col
        className="videoHorizontal__left"
        xs={6}
        md={searchScreen || subScreen ? 4 : 6}
      >
        <LazyLoadImage
          src={medium?.url}
          effect="blur"
          alt="user profile"
          className={`videoHorizontal__thumbnail ${thumbnail}`}
          wrapperClassName="videoHorizontal__thumbnail-wrapper"
        />
        {isVideo && (
          <span className="videoHorizontal__duration">{_duration}</span>
        )}
      </Col>
      <Col
        className="videoHorizontal__right p-0"
        xs={6}
        md={searchScreen || subScreen ? 8 : 6}
      >
        <p className="videoHorizontal__title mb-1">{title}</p>

        {isVideo && (
          <div className="videoHorizontal__details">
            <AiFillEye /> {numeral(views).format("0.a")} Views •{" "}
            {moment(publishedAt).fromNow()}
          </div>
        )}

        {(searchScreen || subScreen) && (
          <p className="mt-1 videoHorizontal__description">{description}</p>
        )}

        <div className="videoHorizontal__channel d-flex align-items-center my-1">
          {isVideo && (
            <LazyLoadImage
              src={channelIcon?.url}
              effect="blur"
              alt="user profile"
            />
          )}
          <p className="mb-0">{channelTitle}</p>
        </div>
        {subScreen && (
          <p className="mt-2">{video.contentDetails.totalItemCount} Videos</p>
        )}
      </Col>
    </Row>
  );
};

export default VideoHorizontal;

import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../../redux/actions/videos.action";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";

import "./_subscriptions.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SunscriptionsScreen = () => {
  const dispatch = useDispatch();
  const { loading, videos } = useSelector(
    (state) => state.subscriptionsChannel
  );

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  return (
    <Container fluid>
      {!loading ? (
        videos?.map((video) => (
          <VideoHorizontal key={video.id} video={video} subScreen />
        ))
      ) : (
        <SkeletonTheme color="#343a40" highlightColor="#3c4147">
          <Skeleton width="100%" height="160px" count={15} />
        </SkeletonTheme>
      )}
    </Container>
  );
};

export default SunscriptionsScreen;

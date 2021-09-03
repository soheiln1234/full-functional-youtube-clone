import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSubscribedChannels } from "../../redux/actions/videos.action";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";

import "./_subscriptions.scss";
import SkeletonHorizontalVideo from "../../components/skeletons/SkeletonHorizontalVideo";

const SubscriptionsScreen = () => {
  const dispatch = useDispatch();
  const { loading, videos } = useSelector(
    (state) => state.subscriptionsChannel
  );

  useEffect(() => {
    dispatch(getSubscribedChannels());
  }, [dispatch]);

  return (
    <Container fluid>
      {!loading
        ? videos?.map((video) => (
            <VideoHorizontal key={video.id} video={video} subScreen />
          ))
        : [...Array(4)].map(() => <SkeletonHorizontalVideo />)}
    </Container>
  );
};

export default SubscriptionsScreen;

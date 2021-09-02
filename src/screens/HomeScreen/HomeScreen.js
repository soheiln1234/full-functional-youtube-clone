import { useEffect } from "react";
import { Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/CategoriesBar/CategoriesBar";
import Video from "../../components/VideoCard/Video";
import { getPopulerVideos } from "../../redux/actions/videos.action";
import { getVideosByCategory } from "../../redux/actions/videos.action";

import InfiniteScroll from "react-infinite-scroll-component";

import SkeletonVideo from "../../components/skeletons/SkeletonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopulerVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") {
      dispatch(getPopulerVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <div>
      <Container>
        <CategoriesBar />
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={<div className="spinner-border d-block mx-auto"></div>}
          className="row"
        >
          {!loading
            ? videos.map((video) => (
                <Col key={video.id} lg={3} md={4}>
                  <Video video={video} />
                </Col>
              ))
            : videos.map(() => (
                <Col lg={3} md={4}>
                  <SkeletonVideo />
                </Col>
              ))}
        </InfiniteScroll>
      </Container>
    </div>
  );
};

export default HomeScreen;

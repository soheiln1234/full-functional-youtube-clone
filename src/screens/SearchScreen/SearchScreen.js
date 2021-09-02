import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideosBySearch } from "../../redux/actions/videos.action";
import VideoHorizontal from "../../components/VideoHorizontal/VideoHorizontal";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import SkeletonHorizontalVideo from "../../components/skeletons/SkeletonHorizontalVideo";

const SearchScreen = () => {
  const { query } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [dispatch, query]);

  const { videos, loading } = useSelector((state) => state.searchedVideos);

  return (
    <Container>
      {!loading
        ? videos?.map((video) => (
            <VideoHorizontal
              video={video}
              key={video.id.videoId}
              searchScreen
            />
          ))
        : [...Array(4)].map(() => <SkeletonHorizontalVideo />)}
    </Container>
  );
};

export default SearchScreen;

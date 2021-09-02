import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonVideo = () => {
  return (
    <div
      style={{
        width: "100%",
        margin: "1rem 0",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <SkeletonTheme color="#343a40" highlightColor="#3c4147">
        <Skeleton height={180} />
        <Skeleton
          style={{ margin: "0.5rem" }}
          height={40}
          width={40}
          circle={true}
        />

        <div>
          <Skeleton
            style={{
              position: "absolute",
              right: "5%",
              top: "190px",
              marginTop: "0.5rem",
            }}
            height={10}
            width="75%"
          />
          <Skeleton
            style={{
              position: "absolute",
              left: "20%",
              top: "220px",
            }}
            height={10}
            width="40%"
          />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default SkeletonVideo;

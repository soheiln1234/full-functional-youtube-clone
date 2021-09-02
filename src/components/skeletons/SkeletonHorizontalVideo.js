import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SkeletonHorizontalVideo() {
  return (
    <div
      style={{
        width: "100%",
        marginLeft: "10vh",
        display: "flex",
        flexDirection: "row",
        position: "relative",
        marginTop: "20px",
      }}
    >
      <SkeletonTheme color="#343a40" highlightColor="#3c4147">
        <Skeleton height={"30vh"} width={"30vw"} />
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            padding: "1rem 0",
            top: "0px",
            left: "31vw",
          }}
        >
          <Skeleton className="mb-4" height={12} width={"50vw"} />
          <Skeleton className="mb-4" height={12} width={"40vw"} />
          <Skeleton className="mb-4" height={12} width={"30vw"} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <Skeleton className="mt-5" height={70} width={70} circle={true} />
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
}

export default SkeletonHorizontalVideo;

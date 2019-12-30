import React from "react";
//Input: liked: boolean
//Output: onClick

const Like = props => {
  let classes = "";
  if (props.liked) classes = "fas";
  else classes = "far";
  classes = classes + " fa-heart";

  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={classes}
    ></i>
  );
};

export default Like;

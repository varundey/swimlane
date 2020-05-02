import React from "react";
import { PageHeader } from "antd";

const Board = (props) => {
  return (
    <PageHeader
      className="site-page-header"
      title={props.boardName}
      backIcon={false}
    />
  );
};

export default Board;

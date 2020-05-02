import React from "react";
import { Card, PageHeader } from "antd";
import "./Board.css";

const BoardHeader = (props) => (
  <PageHeader
    className="site-page-header"
    title={props.boardName}
    backIcon={false}
  />
);

const AddListCard = (props) => (
  <Card className="add-list-card">
    <p>Add List</p>
  </Card>
);

const Board = (props) => {
  return (
    <>
      <BoardHeader boardName={props.boardName} />
      <AddListCard />
    </>
  );
};

export default Board;

import React, { useState } from "react";
import { Card, Input, PageHeader } from "antd";
import "./Board.css";

const BoardHeader = (props) => (
  <PageHeader
    className="site-page-header"
    title={props.boardName}
    backIcon={false}
  />
);

const AddListCard = (props) => {
  const [isAddListClicked, setAddListClicked] = useState(false);

  const AddListCard = (props) => (
    <Card
      size="small"
      className="add-list-card"
      onClick={(_) => setAddListClicked(true)}
    >
      <p>Add List</p>
    </Card>
  );

  const InputListCard = (props) => {
    return <Input placeholder="List Name" />;
  };

  return isAddListClicked ? <InputListCard /> : <AddListCard />;
};

const Board = (props) => {
  return (
    <>
      <BoardHeader boardName={props.boardName} />
      <AddListCard />
    </>
  );
};

export default Board;

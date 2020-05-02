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

const Board = (props) => {
  const [boardListArr, setBoardListArr] = useState([]);

  const ListCard = (props) => {
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
      return (
        <Input
          className="input-list-card"
          placeholder="List Name"
          onPressEnter={(event) =>
            setBoardListArr([...boardListArr, event.target.value])
          }
        />
      );
    };
    return isAddListClicked ? <InputListCard /> : <AddListCard />;
  };

  return (
    <>
      <BoardHeader boardName={props.boardName} />
      <div className="list-container">
        {boardListArr.map((listName) => (
          <Card key={listName} size="small" className="list-card">
            <p>{listName}</p>
          </Card>
        ))}
        <ListCard />
      </div>
    </>
  );
};

export default Board;

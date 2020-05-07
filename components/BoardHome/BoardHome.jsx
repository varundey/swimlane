import React, { useState } from "react";
import "./BoardCreator.css";
import CreateNewBoard from "./CreateNewBoard";
import { Card } from "antd";

const ShowBoard = (props) => {
  const { title } = props;
  return (
    <Card>
      <p>{title}</p>
    </Card>
  );
};

const BoardHome = () => {
  const [boards, setBoards] = useState([]);

  const handleCreateNewBoard = (board) => {
    setBoards([...boards, board]);
  };

  return (
    <>
      {boards.map((board) => {
        const { boardId, boardName } = board;
        return <ShowBoard key={boardId} title={boardName} />;
      })}
      <CreateNewBoard createNewBoard={handleCreateNewBoard} />
    </>
  );
};

export default BoardHome;

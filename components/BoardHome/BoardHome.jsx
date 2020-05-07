import React, { useState } from "react";
import "./BoardCreator.css";
import Board from "../Board/Board";
import CreateNewBoard from "./CreateNewBoard";

const ShowBoards = () => {};

const BoardHome = () => {
  const [boards, setBoards] = useState([]);

  const handleCreateNewBoard = (board) => {
    setBoards([...boards, board]);
  };

  return (
    <>
      <CreateNewBoard createNewBoard={handleCreateNewBoard} />
    </>
  );
};

export default BoardHome;

import React, { useState } from "react";
import CreateNewBoard from "./CreateNewBoard";
import { Card, Row, Col } from "antd";
import Board from "../Board/Board";

const ShowBoard = (props) => {
  const { boardName, boardId, handleBoardClick } = props;

  const onBoardClick = () => {
    handleBoardClick({ boardName, boardId });
  };

  return (
    <Card onClick={onBoardClick}>
      <p>{boardName}</p>
    </Card>
  );
};

const BoardHome = () => {
  const [boards, setBoards] = useState([]);
  const [isBoardOpen, setBoardOpen] = useState(false);
  const [openedBoardData, setOpenedBoardData] = useState(null);

  const handleCreateNewBoard = (board) => {
    setBoards([...boards, board]);
  };

  const handleBoardClick = (boardData) => {
    setBoardOpen(true);
    setOpenedBoardData(boardData);
  };

  return (
    <>
      {isBoardOpen ? (
        <Board
          boardId={openedBoardData.boardId}
          boardName={openedBoardData.boardName}
        />
      ) : (
        <Row gutter={[16, 16]}>
          {boards.map((board) => {
            const { boardId, boardName } = board;
            return (
              <Col span={4} key={boardId}>
                <ShowBoard
                  boardName={boardName}
                  boardId={boardId}
                  handleBoardClick={handleBoardClick}
                />
              </Col>
            );
          })}
          <Col span={4}>
            <CreateNewBoard createNewBoard={handleCreateNewBoard} />
          </Col>
        </Row>
      )}
    </>
  );
};

export default BoardHome;

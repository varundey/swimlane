import React, { useState } from "react";
import "./BoardCreator.css";
import CreateNewBoard from "./CreateNewBoard";
import { Card, Row, Col } from "antd";

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
      <Row gutter={[16, 16]}>
        {boards.map((board) => {
          const { boardId, boardName } = board;
          return (
            <Col span={4} key={boardId}>
              <ShowBoard title={boardName} />
            </Col>
          );
        })}
        <Col span={4}>
          <CreateNewBoard createNewBoard={handleCreateNewBoard} />
        </Col>
      </Row>
    </>
  );
};

export default BoardHome;

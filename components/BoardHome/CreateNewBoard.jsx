import React, { useState } from "react";
import { Input, Card, Modal, Button } from "antd";
import { v4 as uuid } from "uuid";

const CreateNewBoardBox = (props) => {
  const { handleClick } = props;
  return (
    <div className="create-board" style={{ width: "200px" }}>
      <Card
        bodyStyle={{ backgroundColor: "gray" }}
        hoverable={true}
        onClick={handleClick}
      >
        Create new Board
      </Card>
    </div>
  );
};

const BoardTitleInputModal = (props) => {
  const [boardTitle, setBoardTitle] = useState("");

  const { isModalVisible, handleSubmit, handleCancel } = props;

  const handleCreateBoardClick = () => {
    handleSubmit(boardTitle);
  };

  return (
    <Modal
      visible={isModalVisible}
      footer={<Button onClick={handleCreateBoardClick}>Create Board</Button>}
      centered={true}
      onCancel={handleCancel}
    >
      <Input
        placeholder="Enter board title"
        size="middle"
        value={boardTitle}
        onChange={(event) => setBoardTitle(event.target.value)}
      />
    </Modal>
  );
};

const CreateNewBoard = (props) => {
  const [isCreateNewBoardClicked, setCreateNewBoardClicked] = useState(false);
  const { createNewBoard } = props;

  const handleCreateNewBoardClick = () => {
    setCreateNewBoardClicked(true);
  };

  const handleCreateBoard = (boardName) => {
    setCreateNewBoardClicked(false);
    const boardId = uuid();
    createNewBoard([
      {
        boardId,
        boardName,
      },
    ]);
  };

  const handleCancel = () => {
    setCreateNewBoardClicked(false);
  };

  return isCreateNewBoardClicked ? (
    <BoardTitleInputModal
      isModalVisible={isCreateNewBoardClicked}
      handleSubmit={handleCreateBoard}
      handleCancel={handleCancel}
    />
  ) : (
    <CreateNewBoardBox handleClick={handleCreateNewBoardClick} />
  );
};

export default CreateNewBoard;

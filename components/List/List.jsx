import React, { useState } from "react";
import { Card, Input } from "antd";

const List = (props) => {
  const AddToList = (props) => {
    const [isAddListClicked, setAddListClicked] = useState(false);

    const AddListButton = (props) => (
      <Card
        size="small"
        className="add-list-card"
        onClick={(_) => setAddListClicked(true)}
      >
        <p>Add List</p>
      </Card>
    );

    const InputListName = (props) => {
      return (
        <Input
          className="input-list-card"
          placeholder="List Name"
          onPressEnter={(event) => props.addList(event.target.value)}
        />
      );
    };
    return isAddListClicked ? (
      <InputListName addList={props.addList} />
    ) : (
      <AddListButton />
    );
  };

  return (
    <div className="list-container">
      {props.lists.map((listName) => (
        <Card
          // actions={[<ListCards />]}
          key={listName}
          size="small"
          className="list-card"
        >
          <p>{listName}</p>
          {/*{cardListArr.map((card) => (*/}
          {/*  <div key={card}>{card}</div>*/}
          {/*))}*/}
        </Card>
      ))}
      <AddToList addList={props.addList} />
    </div>
  );
};

export default List;

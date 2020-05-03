import React, { useState } from "react";
import { Input } from "antd";

const AddCard = (props) => {
  const [isAddCardClicked, setIsAddCardClicked] = useState(false);

  const AddCardButton = (props) => (
    <div onClick={() => setIsAddCardClicked(true)}>Add Card</div>
  );

  const InputCardName = (props) => (
    <Input
      className="input-list-card"
      placeholder="Card Name"
      onPressEnter={(event) => {
        props.addCard(event.target.value);
        setIsAddCardClicked(false);
      }}
    />
  );

  return isAddCardClicked ? (
    <InputCardName addCard={props.addCard} />
  ) : (
    <AddCardButton />
  );
};

const CardRenderer = (props) => {
  return (
    <div className="card-container">
      {props.cards.map((card) => (
        <div key={card}>{card}</div>
      ))}
    </div>
  );
};

export default CardRenderer;
export { AddCard };

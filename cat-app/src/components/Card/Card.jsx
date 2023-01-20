import React from "react";
import "./Card.css";
import cat from "../../img/cat.png";
import { useState } from "react";

const Card = ({ card }) => {
  const [dataCard, setDataCard] = useState(card);
  const [selected, setSelected] = useState(false);
  const [leaved, setLeaved] = useState(false);

  function getTextFooter() {
    if (selected) {
      return <div>{dataCard.textFooter}</div>;
    } else {
      return (
        <div>
          Чего сидишь? Порадуй котэ,{" "}
          <span
            className="buy"
            onClick={() => {
              selectItem();
            }}
          >
            купи.
          </span>
        </div>
      );
    }
  }

  function getTextTitle() {
    if (selected) {
      if (leaved) {
        return (
          <span className="item__info-title_header leaved-text">
            Котэ не одобряет?
          </span>
        );
      }
    }  
      return (
        <span className="item__info-title_header">
          Сказочное заморское яство
        </span>
      );
    
  }

  function leavedItem() {
    if(dataCard.disabled){
        return
    }
    if (selected) {
      if (!leaved) {
        setLeaved(!leaved);
      }
    } 
    if (!selected) {
        if (leaved) {
          setLeaved(!leaved);
        }
      } 
  }

  function getClassNameBySelected(isItem) {
    if (isItem) {
      if (selected) {
        return "cards-item cards-item-selected";
      } else {
        return "cards-item";
      }
    } else {
      if (selected) {
        return "weight__circle circle-selected";
      } else {
        return "weight__circle";
      }
    }
  }

  function selectItem() {
    if(dataCard.disabled) {
        return
    }
    setSelected(!selected);
  }

function isDisabled() {
    if(dataCard.disabled) {
        return 'grayscale(1)'
    } else {
        return ''
    }
}

  return (
    <div key={dataCard.id} className="wrap" style={{filter: isDisabled()}}>
      <div
        className={getClassNameBySelected(true)}
        onClick={() => {
          selectItem();
        }}
        onMouseLeave={() => {
          leavedItem();
        }}
      >
        <div className="item__info">
          <div className="item__info-title">
            {/* <div className="corner corner-selected"></div> */}

            {getTextTitle()}
          </div>
          <div className="item__info-main">
            <h2>
              Нямушка <br />
              <span className="taste">{dataCard.taste}</span>
            </h2>
            <div className="test">
              <span className="quantity">{dataCard.quantity}</span> <br />
              <span className="gift">{dataCard.gift}</span>
            </div>
          </div>

          <img className="img-cat" src={cat} alt="cat" />
          <div className={getClassNameBySelected(false)}>
            <span className="weight">{dataCard.weight}</span>
            <span className="kg">{dataCard.kg}</span>
          </div>
        </div>
      </div>
      <span className="text-footer">{getTextFooter()}</span>
    </div>
  );
};

export default Card;

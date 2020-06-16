import React, { useState } from "react";

import "./card.scss";

export default function Card({
  img,
  code,
  title,
  assocProducts,
  isActive,
  priceGoldAlt,
  priceRetailAlt,
  productId,
  priceGold,
  priceRetail
}) {
  const [counter, setCounter] = useState(1);
  const [priceValue, setPricevalue] = useState(false)

  const addCount = () => {
    setCounter(counter + 1);
  };
  const remCount = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="card">
      <div className="card__left">
        <div className="card__logo">
          <img src={img} alt="Logo" />
        </div>
      </div>
      <div className="card__center">
        <div className="card__code">Код: {code.replace(/^0+/, "")}</div>
        <div className="card__title">
          <a className="card__title_link" href="/">
            {title}
          </a>
        </div>
        <div className="card__assoc">
          <div>
            Могут понадобиться:{" "}
            {assocProducts &&
              assocProducts.split(";").map((elem, index) => {
                return (
                  <a className="card__link" key={index} href="/">
                    {elem},
                  </a>
                );
              })}
          </div>
        </div>
      </div>
      <div className="card__right">
        <div className="card__active">
          {isActive ? "В наличии" : "Нет в наличии"}
        </div>
        <br />
        <div className="card__price">
          <div className="card__price_club_card">
            <span className="card__price_text">По карте клуба</span>
            <span className="card__price_price">
              {!priceValue ? priceRetailAlt.toFixed(2): priceRetail.toFixed(2)} ₽
            </span>
          </div>
          <div className="card__price_default">{
            !priceValue ? priceGoldAlt.toFixed(2): priceGold.toFixed(2)} ₽</div>
        </div>
        <div className="card__ball">
          <span>Можно купить за 231,75 балла</span>
        </div>
        <div className="card__check_price">
          <button onClick={()=> setPricevalue(false)} >За м.кв.</button>
          <button onClick={() => setPricevalue(true)} >За упаковку</button>
        </div>
        <div className="card__info">
          <div className="card__info_warning"></div>
          <span>
            Продается упаковками: <br /> 1 упак. = 2.47 м. кв.
          </span>
        </div>
        <div className="card__buy">
          <div className="card__counter">
            <input
              onChange={(e) => setCounter(e.target.value)}
              className="card__counter_value"
              type="text"
              value={counter}
            />
            <div className="card__counter_button">
              <button onClick={addCount}>⇧</button>
              <button
                id="btn"
                className="card__counter_button_up"
                onClick={remCount}
              >
                ⇩
              </button>
            </div>
          </div>
          <button data-product-id={productId} className="card__btn">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
}

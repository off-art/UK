import React from "react";

import { Card } from "../index";

export default function CardList({ data }) {
  return (
    <div className="container">
      {data &&
        data.map((card, index) => {
          const {
            primaryImageUrl,
            code,
            title,
            assocProducts,
            isActive,
            priceGoldAlt,
            priceRetailAlt,
            productId,
            priceGold,
            priceRetail
          } = card;
          return (
            <Card
              key={index}
              img={primaryImageUrl}
              code={code}
              title={title}
              assocProducts={assocProducts}
              isActive={isActive}
              priceGoldAlt={priceGoldAlt}
              priceRetailAlt={priceRetailAlt}
              productId={productId}
              priceGold={priceGold}
              priceRetail={priceRetail}
            />
          );
        })}
    </div>
  );
}

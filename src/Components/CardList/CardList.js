// CardList.js
import React, { useState, useEffect } from "react";
import CardUser from "../CardDulce/CardDulce";
import getFetch from "../Data/Data";

const CardList = ({ setSelectedCard }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFetch()
      .then((resp) => setData(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="CardDiv">
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        data.map((item) => (
          <CardUser
            key={item.id}
            name={item.name}
            description={item.description}
            img={item.img}
            onClick={() => handleCardClick(item)}
          />
        ))
      )}
    </div>
  );
};

export default CardList;
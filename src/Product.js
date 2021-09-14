import React from "react";
import "./Product.css";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    if (!user) {
      history.push('/login')
    }
    else {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      });
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="produce_image" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;

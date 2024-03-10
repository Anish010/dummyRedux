import React from 'react';
import { useSelector } from 'react-redux';

const ItemDetail = () => {
  const items = useSelector(state => state.item.item);

  return (
    <div>
      <h1>Item Detail</h1>
      {items.map((item, index) => (
        <div key={index}>
          <h2>ID: {item.id}</h2>
          <h2>Name: {item.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ItemDetail;

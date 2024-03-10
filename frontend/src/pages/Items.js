import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { storeItem } from '../reducers/itemReducer';

const Items = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  // When you have to store data in redux you have to use useDispatch()
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setItems(response.data);
        dispatch(storeItem(response.data)); // Dispatch action to store data in Redux
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [dispatch]);

  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};


export default Items;
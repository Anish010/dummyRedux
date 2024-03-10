const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Dummy data
let items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

app.use(bodyParser.json());

// Get all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Get a specific item
app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Create a new item
app.post("/api/items", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

// Update an item
app.put("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  items = items.map((item) => (item.id === id ? updatedItem : item));
  res.json(updatedItem);
});

// Delete an item
app.delete("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter((item) => item.id !== id);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

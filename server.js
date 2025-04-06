/*
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

// Масив для зберігання замовлень
let orders = [];

// API endpoint для отримання всіх замовлень (для адміністратора)
app.get("/api/orders", (req, res) => {
  res.json(orders);
});

// API endpoint для створення нового замовлення
app.post("/api/orders", (req, res) => {
  try {
    const newOrder = {
      id: Date.now(), // Унікальний ID на основі часу
      date: new Date(),
      status: "new", // 'new', 'processing', 'completed', 'cancelled'
      ...req.body,
    };

    orders.push(newOrder);

    res.status(201).json({
      success: true,
      message: "Замовлення успішно створено",
      orderId: newOrder.id,
    });
  } catch (error) {
    console.error("Помилка при створенні замовлення:", error);
    res.status(500).json({
      success: false,
      message: "Сталася помилка при створенні замовлення",
    });
  }
});

// API endpoint для оновлення статусу замовлення (для адміністратора)
app.put("/api/orders/:id", (req, res) => {
  const orderId = parseInt(req.params.id);
  const orderIndex = orders.findIndex((order) => order.id === orderId);

  if (orderIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Замовлення не знайдено",
    });
  }

  orders[orderIndex] = {
    ...orders[orderIndex],
    ...req.body,
    updatedAt: new Date(),
  };

  res.json({
    success: true,
    message: "Замовлення успішно оновлено",
  });
});

// API endpoint для видалення замовлення (для адміністратора)
app.delete("/api/orders/:id", (req, res) => {
  const orderId = parseInt(req.params.id);
  const orderIndex = orders.findIndex((order) => order.id === orderId);

  if (orderIndex === -1) {
    return res.status(404).json({
      success: false,
      message: "Замовлення не знайдено",
    });
  }

  orders.splice(orderIndex, 1);

  res.json({
    success: true,
    message: "Замовлення успішно видалено",
  });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущено на порту: ${port}`);
});
*/

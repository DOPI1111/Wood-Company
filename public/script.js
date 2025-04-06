const woodData = {
  Березові: {
    price: 1800,
  },
  Хвойні: {
    price: 1600,
  },
  Брикети: {
    price: 2000,
  },
  "Фруктові дерева": {
    price: 2200,
  },
  Ясен: {
    price: 1900,
  },
  Бук: {
    price: 2100,
  },
};

// Плавна прокрутка
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Змінні для форми замовлення
const orderModal = document.getElementById("orderModal");
const successModal = document.getElementById("successModal");
const orderForm = document.getElementById("orderForm");
const woodTypeInput = document.getElementById("woodType");
const woodPriceInput = document.getElementById("woodPrice");
const closeOrderBtn = document.querySelector(".close-order");
const closeSuccessBtn = document.querySelector(".close-success");
const volumeInput = document.getElementById("volume");
const totalPriceSpan = document.getElementById("totalPrice");

// Обробники подій для кнопок з видами дерев
document.querySelectorAll(".block").forEach((block) => {
  block.addEventListener("click", () => {
    const woodName = block.textContent
      .trim()
      .replace("🪵", "")
      .replace("🌲", "")
      .replace("🔥", "")
      .trim();
    const data = woodData[woodName];

    if (data) {
      // Заповнюємо форму даними про обраний вид дерева
      woodTypeInput.value = woodName;
      woodPriceInput.value = data.price;

      // Встановлюємо початкове значення для об'єму та загальної ціни
      volumeInput.value = 1;
      totalPriceSpan.textContent = data.price;

      // Відображаємо форму
      orderModal.style.display = "block";
    }
  });
});

// Розрахунок загальної вартості при зміні об'єму
volumeInput.addEventListener("input", () => {
  if (volumeInput.value && woodPriceInput.value) {
    const volume = parseFloat(volumeInput.value);
    const price = parseFloat(woodPriceInput.value);
    totalPriceSpan.textContent = (volume * price).toFixed(0);
  }
});

// Закриття форми
closeOrderBtn.addEventListener("click", () => {
  orderModal.style.display = "none";
});

// Закриття повідомлення
closeSuccessBtn.addEventListener("click", () => {
  successModal.style.display = "none";
});

// Закриття форм при кліку поза ними
window.addEventListener("click", (e) => {
  if (e.target == orderModal) {
    orderModal.style.display = "none";
  }
  if (e.target == successModal) {
    successModal.style.display = "none";
  }
});

// Обробка відправки форми
orderForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Збираємо дані форми
  const formData = {
    woodType: woodTypeInput.value,
    price: woodPriceInput.value,
    volume: volumeInput.value,
    totalPrice: totalPriceSpan.textContent,
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    date: document.getElementById("date").value,
  };

  /*
  fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Успіх:", data);
      // Закриваємо форму замовлення
      orderModal.style.display = "none";
      // Показуємо повідомлення про успіх
      successModal.style.display = "block";
    })
    .catch((error) => {
      console.error("Помилка:", error);
      alert("Виникла помилка при відправці замовлення. Спробуйте ще раз.");
    });
    */

  // Тимчасово, до реалізації бекенду, просто показуємо повідомлення про успіх
  orderModal.style.display = "none";
  successModal.style.display = "block";

  // Очищаємо форму для наступного використання
  orderForm.reset();
});

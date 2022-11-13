const ObjectId = require("mongodb").ObjectId;

const orders = Array.from({ length: 22 }).map((_, idx) => {
  let day = 20;
  if (idx < 10) {
    var hour = "0" + idx;
    var subtotal = 100;
  } else if (idx > 16 && idx < 21) {
    var hour = idx;
    var subtotal = 100 + 12 * idx;
  } else {
    var hour = idx;
    var subtotal = 100;
  }
  return {
    user: ObjectId("625add3d78fb449f9d9fe2ee"),
    orderTotal: {
      itemsCount: 3,
      cartSubtotal: subtotal,
    },
    cartItems: [
      {
        name: "Product name",
        price: 34,
        image: { path: "/images/books-category.png" },
        quantity: 3,
        count: 12,
      },
    ],
    paymentMethod: "PayPal",
    isPaid: false,
    isDelivered: false,
    createdAt: Date(), // 2022-10-20T00:27:04.654+00:00
  };
});

module.exports = orders;
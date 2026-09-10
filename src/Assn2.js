import { LegacyESLint } from "eslint/use-at-your-own-risk";
import React from "react";

const Assn2 = () => {
  //1
  const users = [
    {
      id: 1,
      firstName: "Raj",
      lastName: "Patel",
      address: { city: "Surat" },
    },
    {
      id: 2,
      firstName: "Sara",
      lastName: "Wilson",
      address: { city: "London" },
    },
  ];
  const filteredUsers = users.map((u) => ({
    id: u.id,
    fullName: u.firstName + " " + u.lastName,
    city: u.address.city,
  }));
  console.log("users", filteredUsers);

  //2
  const products = [
    { name: "Laptop", price: 1200, stock: 4 },
    { name: "Mouse", price: 30, stock: 10 },
    { name: "Monitor", price: 400, stock: 0 },
    { name: "Keyboard", price: 100, stock: 6 },
  ];
  const filteredProd = products.filter((p) => p.stock > 0 && p.price >= 100);

  for (let i = 0; i < filteredProd.length - 1; i++) {
    for (let j = 0; j < filteredProd.length - 1; j++) {
      if (filteredProd[j].price > filteredProd[j + 1].price) {
        let temp = filteredProd[j];
        filteredProd[j] = filteredProd[j + 1];
        filteredProd[j + 1] = temp;
      }
    }
  }
  console.log("products", filteredProd);

  //3
  const words = ["React", "node", "react", "JavaScript", "NODE", "react"];
  const count = words
    .map((w) => w.toLowerCase())
    .reduce((acc, w) => {
      if (!acc[w]) {
        acc[w] = 0;
      }
      acc[w] += 1;
      return acc;
    }, {});
  console.log("word count", count);

  //4
  const transactions = [
    { type: "income", amount: 2000 },
    { type: "expense", amount: 500 },
    { type: "income", amount: 750 },
    { type: "expense", amount: 300 },
  ];
  const category = transactions.reduce((acc, t) => {
    const key = t.type;
    if (!acc[key]) {
      acc[key] = 0;
    }
    acc[key] += t.amount;
    acc["balance"] = acc["income"] - acc["expense"];
    return acc;
  }, {});
  console.log("category", category);

  //5
  const categories = [
    { name: "Electronics", products: ["Laptop", "Mouse"] },
    { name: "Furniture", products: ["Desk", "Chair"] },
  ];
  const filteredCat = categories.flatMap((c) =>
    c.products.map((p) => ({ products: p, category: c.name })),
  );
  console.log("filteredCat", filteredCat);

  //6
  const users2 = [
    { id: 1, profile: { name: "Raj", email: "raj@example.com" } },
    { id: 2, profile: { name: "Sara", email: "old@example.com" } },
  ];
  const newEmail = "sara@example.com";
  const updatedUsers = users2.map((u) =>
    u.id == 2 ? { ...u, profile: { ...u.profile, email: newEmail } } : u,
  );
  console.log("updatedUsers", updatedUsers);

  //7
  const numbers = [10, 5, 20, 20, 8, 15, 10];
  const uniqNum = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    if (!uniqNum.includes(numbers[i])) {
      uniqNum.push(numbers[i]);
    }
  }
  for (let i = 0; i < uniqNum.length - 1; i++) {
    for (let j = 0; j < uniqNum.length - 1; j++) {
      if (uniqNum[j] > uniqNum[j + 1]) {
        let temp = uniqNum[j];
        uniqNum[j] = uniqNum[j + 1];
        uniqNum[j + 1] = temp;
      }
    }
  }
  console.log("uniqNum", uniqNum);
  console.log("second highest number:", uniqNum[uniqNum.length - 2]);

  //8
  const students = [
    { name: "Raj", department: "IT", score: 80 },
    { name: "Sara", department: "HR", score: 70 },
    { name: "John", department: "IT", score: 90 },
    { name: "Mia", department: "HR", score: 80 },
  ];

  const dept = students.reduce((acc, s) => {
    const key = s.department;
    if (!acc[key]) {
      acc[key] = { score: 0, count: 0 };
    }
    acc[key].score += s.score;
    acc[key].count++;
    return acc;
  }, {});
  const dd = Object.entries(dept).map(([name, details]) => ({
    [name]: details.score / details.count,
  }));
  const dd1 = dd.reduce((acc, r) => {
    return { ...acc, ...r };
  }, {});

  console.log("dept", dd1);

  //9
  async function getUsers() {
    return [
      { id: 1, name: "Raj" },
      { id: 2, name: "Sara" },
    ];
  }
  async function getPosts() {
    return [
      { id: 101, userId: 1, title: "Post A" },
      { id: 102, userId: 1, title: "Post B" },
      { id: 103, userId: 2, title: "Post C" },
    ];
  }
  async function getUserProfiles() {
    const [users1, posts1] = await Promise.all([getUsers(), getPosts()]);
    const merged = users1.map((u) => ({
      id: u.id,
      name: u.name,
      posts: posts1.filter((p) => p.userId == u.id).map((p) => p.title),
    }));
    console.log("mergedData", merged);
  }
  getUserProfiles();

  //10
  const orders = [
    { id: 1, customer: "Raj", amount: 200, status: "completed" },
    { id: 2, customer: "Sara", amount: 150, status: "pending" },
    { id: 3, customer: "Raj", amount: 300, status: "completed" },
    { id: 4, customer: "Sara", amount: 250, status: "completed" },
    { id: 5, customer: "John", amount: 100, status: "completed" },
  ];
  const filteredOrders = Object.entries(
    orders
      .filter((o) => o.status == "completed")
      .reduce((acc, o) => {
        const key = o.customer;
        if (!acc[key]) {
          acc[key] = { amt: 0, count: 0 };
        }
        acc[key].amt += o.amount;
        acc[key].count++;
        return acc;
      }, {}),
  )
    .map(([name, details]) => ({
      customer: name,
      total: details.amt,
      orderCount: details.count,
    }))
    .filter((o) => o.total >= 250);

  console.log("filteredOrders", filteredOrders);

  return <div>Assn2</div>;
};

export default Assn2;

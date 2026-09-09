import React from "react";

const Assn1 = () => {
  const users = [
    { id: 1, name: "Raj", age: 25 },
    { id: 2, name: "John", age: 30 },
    { id: 3, name: "Sara", age: 22 },
  ];
  const mappedUser = users.map((u) => ({ id: u.id, name: u.name }));
  console.log(mappedUser);

  const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 30, inStock: false },
    { name: "Keyboard", price: 80, inStock: true },
    { name: "Monitor", price: 400, inStock: true },
  ];
  const filtered = products.filter((p) => p.inStock == true && p.price > 100);
  console.log(filtered);

  const cart = [
    { product: "Laptop", price: 1000, quantity: 1 },
    { product: "Mouse", price: 50, quantity: 2 },
    { product: "Keyboard", price: 100, quantity: 1 },
  ];
  const total = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  console.log(total);

  const employees = [
    { id: 101, name: "Raj" },
    { id: 102, name: "Alex" },
    { id: 103, name: "Sam" },
  ];
  const found = employees.find((e) => e.id == 102);
  const foundIndex = employees.findIndex((e) => e.id == 102);
  console.log(
    "employee with id 102:",
    found.name,
    ", found at index",
    foundIndex,
  );

  const orders = [
    { id: 1, paid: true },
    { id: 2, paid: true },
    { id: 3, paid: false },
  ];
  const some = orders.some((o) => o.paid == false);
  const every = orders.every((o) => o.paid == true);
  console.log(some, every);

  const technologies = ["React", "Vue", "Angular"];
  technologies.push("Next.js");
  technologies.unshift("JavaScript");
  const index = technologies.findIndex((t) => t == "Vue");
  technologies.splice(index, 1);
  technologies.pop();
  console.log(technologies);

  const users2 = [
    { firstName: "Raj", lastName: "Patel", active: true },
    { firstName: "John", lastName: "Smith", active: false },
    { firstName: "Sara", lastName: "Wilson", active: true },
  ];
  const fullName = users2
    .filter((u) => u.active == true)
    .map((u) => u.firstName + " " + u.lastName);
  console.log(fullName);

  const numbers = [1, 2, 2, 3, 4, 4, 5, 1];
  const num = [...new Set(numbers)];
  console.log(num);

  const employees2 = [
    { name: "Raj", department: "Development" },
    { name: "John", department: "Design" },
    { name: "Sara", department: "Development" },
    { name: "Mike", department: "Design" },
  ];
  const dept = employees2.reduce((acc, emp) => {
    const key = emp.department;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(emp.name);
    return acc;
  }, {});
  console.log(dept);

  const orders2 = [
    { id: 1, customer: "Raj", amount: 200, status: "completed" },
    { id: 2, customer: "John", amount: 150, status: "pending" },
    { id: 3, customer: "Raj", amount: 300, status: "completed" },
    { id: 4, customer: "Sara", amount: 100, status: "completed" },
    { id: 5, customer: "John", amount: 250, status: "completed" },
  ];
  const completed = orders2
    .filter((o) => o.status == "completed")
    .reduce((acc, order) => {
      const key = order.customer;
      if (!acc[key]) {
        acc[key] = 0;
      }
      acc[key] += order.amount;
      return acc;
    }, {});
  console.log(completed);

  return <div>assn1</div>;
};

export default Assn1;

# MERN eCommerce Platform

## 📌 Project Overview

This is a **Full-Stack eCommerce Platform** built using the **MERN Stack (MongoDB, Express.js, React, Node.js)**. The platform allows users to browse products, add items to their cart, and manage their purchases. **Admins** can manage products (CRUD operations) via an admin dashboard.

## 🚀 Features

- **User Authentication** (Sign up, Login, JWT-based auth)
- **Product Management** (CRUD for products, Admin-only access)
- **Shopping Cart** (Users can add/remove items, stored in MongoDB)
- **Protected Routes** (Only logged-in users can access cart & checkout)
- **Admin Dashboard** (Manage products, view orders, etc.)

## 🛠 Tech Stack

- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Authentication:** JWT (JSON Web Tokens)
- **State Management:** React Context API

## 📂 Folder Structure

```
mern-ecommerce/
│── backend/          # Express.js API
│   ├── models/       # Mongoose models (User, Product, Cart, etc.)
│   ├── routes/       # API Routes (Auth, Products, Cart)
│   ├── middleware/   # Authentication & security middleware
│   ├── config/       # Database & environment configuration
│   ├── server.js     # Entry point for backend
│
│── frontend/         # React App
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Pages (Home, ProductDetails, Cart, etc.)
│   │   ├── context/     # Context API for state management
│   │   ├── api.js       # Axios API setup
│   │   ├── App.jsx      # Main React App
│   │   ├── index.css    # Global styles
│   │   ├── main.jsx     # React entry file
│
│── .env               # Environment variables
│── package.json       # Dependencies
│── README.md          # Project Documentation
```

## 🔧 Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/LEAKONO/mern-ecommerce.git
cd mern-ecommerce
```

### **2️⃣ Backend Setup**

```sh
cd backend
npm install
```

#### **Create a ****************`.env`**************** file in the ****************`backend/`**************** folder**

```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

#### **Start the Backend Server**

```sh
node server.js
```

### **3️⃣ Frontend Setup**

```sh
cd frontend
npm install
```

#### **Start the Frontend Server**

```sh
npm run dev
```

## 🔌 API Routes

### **Authentication (Auth Routes)**

| Method | Endpoint          | Description            |
| ------ | ----------------- | ---------------------- |
| POST   | `/users/register` | Register a new user    |
| POST   | `/users/login`    | User login (JWT token) |

### **Products (Product Routes)**

| Method | Endpoint        | Description                    |
| ------ | --------------- | ------------------------------ |
| GET    | `/products`     | Get all products               |
| GET    | `/products/:id` | Get product details            |
| POST   | `/products`     | Add a new product (Admin only) |
| PUT    | `/products/:id` | Update product (Admin only)    |
| DELETE | `/products/:id` | Delete product (Admin only)    |

### **Cart (Cart Routes)**

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| GET    | `/cart`            | Get user's cart       |
| POST   | `/cart/add`        | Add item to cart      |
| DELETE | `/cart/remove/:id` | Remove item from cart |
| DELETE | `/cart`            | Clear cart            |

## 🛡️ Admin Access

To become an admin, a user must first **register as a normal user**. By default, all users are assigned a **regular user role**. To grant admin access, update the user's role in the database using MongoDB shell:

```sh
db.users.updateOne({ email: "user@example.com" }, { $set: { role: "admin" } })
```

Once updated, the user will be able to access the **Admin Dashboard** on the frontend.

## 🚀 Future Enhancements

- **Payment Integration** (Stripe, PayPal)
- **Order Management** (User order history, admin order tracking)
- **User Profiles** (View past orders, manage addresses)
- **Wishlist Feature** (Users can save favorite products)
- **Deployment** (Host on Vercel/Render & MongoDB Atlas)

## 📝 License

This project is **MIT Licensed**.

## 👨‍💻 Author

Developed by **Emmanuel Leakono** 🚀




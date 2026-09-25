# Design Documentation

## 1. Project Overview

This project is a modern e-commerce frontend for an online clothing store.
The main goal of the project is to provide a simple, modern, and responsive shopping experience for users.

## 2. Project Structure

The project follows a component-based structure to keep the codebase organized, reusable, and maintainable.

src/
├── assets/
│   ├── images/
│   ├── font/
│   └── icons/
│
├── components/
│   ├── Header/
│        └──Header.jsx
│        └──Navbar.jsx
│        └──Herosection.jsx
│
│   ├── Footer/
│   ├── Slider/
│       └──Cate_Slider.jsx
│       └──Brand_Slider.jsx
│       └──Product_Slider.jsx
│   ├── Card/
│       └──product_Card.jsx
│       └──brand_Card.jsx
│       └──cate_Card.jsx
│   ├── Button/
│   ├── LandingReport.jsx
│
├── pages/
│   ├── Home/
│   ├── Authentication/
│
├── data/
|
├── api/
|     └──interceptor.jsx
│  
│
├── hooks/
|     └──cart_Context.jsx
|     └──auth_Context.jsx
|     └──theme_Context.jsx
│
├── layouts/
│   └── MainLayout.jsx
│   └── AuthLayout.jsx
│   └── DashboardLayout.jsx
│   └── notFound_Layout.jsx
│
├── core/
│     └── App.jsx
│     └── main.jsx
│     └── route.jsx
│     └── route.jsx
│     
├──  style/




## 3.Technology

`react.js`
`tailwindcss`
`react-router-dom`
`axios`
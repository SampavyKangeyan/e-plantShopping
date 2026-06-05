# e-plantShopping repository

## Paradise Nursery Shopping

### Project Overview

**Paradise Nursery Shopping** is a React-based shopping cart application developed for **Paradise Nursery**, an online plant shop that offers a wide variety of beautiful and healthy house plants. The application provides users with a seamless shopping experience, allowing them to browse plant collections, add plants to their cart, manage quantities, and proceed to checkout.

The project demonstrates modern front-end development concepts including component-based architecture, state management, routing, and responsive user interface design.

---

## Features

### Landing Page

* Attractive welcome page introducing Paradise Nursery.
* Brief description of the nursery and its products.
* "Get Started" button that navigates users to the product listing page.

### Navigation Bar

* Easy navigation between:

  * Home (Landing Page)
  * Products Page
  * Shopping Cart
* Displays cart icon and cart item count.

### Product Listing Page

* Displays a collection of house plants.
* Plants are organized into categories such as:

  * Aromatic Plants
  * Medicinal Plants
* Each plant card includes:

  * Plant Image
  * Plant Name
  * Plant Description
  * Price
  * Add to Cart Button

### Shopping Cart

* Displays all plants added to the cart.
* Each cart item includes:

  * Plant Thumbnail
  * Plant Name
  * Unit Price
  * Total Price per Plant Type
  * Quantity Controls (+ / -)
  * Delete Button
* Automatically updates cart totals.

### Cart Actions

* Increase quantity of a plant.
* Decrease quantity of a plant.
* Remove a plant completely from the cart.
* Continue Shopping button.
* Checkout button.

---

## Plant Categories

### Aromatic Plants

Plants known for their pleasant fragrance and air-freshening properties.

Examples:

* Lavender
* Jasmine
* Mint

### Medicinal Plants

Plants commonly used for health and wellness purposes.

Examples:

* Aloe Vera
* Tulsi (Holy Basil)
* Neem

---

## Technologies Used

* React.js
* JavaScript (ES6+)
* HTML5
* CSS3
* React Router
* Redux / Context API (for state management)
* Vite

---

## Project Structure

```text
e-plantShopping/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── README.md
└── vite.config.js
```

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/e-plantShopping.git
```

2. Navigate to the project folder:

```bash
cd e-plantShopping
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the application in your browser:

```text
http://localhost:5173
```

---

## Application Workflow

1. User lands on the Paradise Nursery landing page.
2. Clicks "Get Started".
3. Browses available plants by category.
4. Adds desired plants to the shopping cart.
5. Updates quantities or removes items as needed.
6. Reviews the cart summary.
7. Continues shopping or proceeds to checkout.

---

## Learning Objectives

This project demonstrates:

* React component creation and reuse
* State management techniques
* Shopping cart functionality
* Dynamic rendering of products
* Event handling
* Routing and navigation
* Responsive web design

---

## Repository

Repository Name: **e-plantShopping**

---

## Author

Developed as part of a React Shopping Cart Application project for Paradise Nursery.

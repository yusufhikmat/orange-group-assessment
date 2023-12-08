
# React Shopping App

A simple React shopping app with Redux state management.

## Table of Contents

- Getting Started
- Prerequisites
- Installation
- Running the Project
- Project Structure
- Assumptions
- Contributing
- License

## Getting Started

### Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   git clone https://github.com/yusufhikmat/orange-group-assessment.git

2. Change into the project directory:

   cd orange-group-assessment

3. Install dependencies:
   npm install

### Running the Project
To run the project, follow these steps:

1. Start the development server:
   npm start

2. Open your browser and navigate to http://        localhost:3000.

### Project structure 
    
    orange-group/
│
├── src/
│   ├── components/
│   │   ├── allProducts/
│   │   │   ├── AllProducts.css
│   │   │   ├── AllProducts.tsx
│   │   │   └── 
│   │   ├── footer/
│   │   │   ├── Footer.tsx
│   │   │   ├── Footer.css
│   │   │   └── 
│   │   └── 
│   │   ├── heroSection/
│   │   │   ├── Hero.css
│   │   │   ├── Hero.tsx
│   │   │   └── 
│   │   ├── navbar/
│   │   │   ├── Navbar.tsx
│   │   │   ├── ShoppiNavbarngCart.css
│   │   │   └── 
│   │   └── ...
│   ├── pages/
│   │   ├── cart/
│   │   │   ├── Cart.css
│   │   │   ├── Cart.tsx
│   │   │   └── 
│   │   ├── home/
│   │   │   ├── Home.tsx
│   │   │   ├── Home.css
│   │   │   └── 
│   │   └── 
│   │   ├── notFound/
│   │   │   ├── NotFound.css
│   │   │   ├── NotFound.tsx
│   │   │   └── 
│   │   ├── productDetails/
│   │   │   ├── ProductDetails.tsx
│   │   │   ├── ProductDetails.css
│   │   │   └── 
│   │   └── ...
│   ├── redux/
│   │   ├── api/
│   │   │   ├── ProductsApi.js
│   │   │   └── ...
│   │   ├── slice/
│   │   │   ├── cartSlice.js
│   │   │   └── ...
│   └── ...
│
├── public/
│   └── ...
│
├── .store.tsx
├── .gitignore
├── package.json
├── README.md
└── ...

. src/components/: Contains React components.
. src/redux/api/: API-related logic and configurations.
. src/redux/slice/: Redux slice files defining actions and reducers.
. src/store.js: Redux store setup.
. public/: Public assets and the HTML template.

### Assumptions
 The project assumes a JSON API at https://fakestoreapi.com/products.
 The cart logic is managed with Redux.

### Contributing
  Contributions are welcome! Please follow the contribution guidelines.

### License
This project is licensed under the MIT License.

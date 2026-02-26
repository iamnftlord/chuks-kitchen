# Chuks Kitchen 🍳

Chuks Kitchen is a modern, responsive food ordering web application designed to provide a premium user experience. Built with React and Vite, the application features a sleek UI, robust navigation, and a complete order flow from exploration to payment.

## ✨ Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **User Authentication**: Secure Login and Sign-up flows.
- **Product Exploration**: Browse categories and special menus on the Explore page.
- **Cart Management**: Add and manage items in your order.
- **Protected Routes**: Secure access to orders, exploration, and payment pages.
- **Order Summary**: Detailed breakdown of delivery details and pricing.
- **Simulated Payment**: Functional payment interface with validation (Mastercard format).

## 🚀 Technologies Used

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Routing**: [React Router Dom 7](https://reactrouter.com/)
- **State Management**: React Context API

## 🛠️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd chuks-kitchen
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

#### Development Mode

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified in your terminal).

#### Production Build

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist` folder.

#### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📂 Project Structure

```text
chuks-kitchen/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images and style assets
│   ├── components/  # Reusable UI components (Navbar, Footer, etc.)
│   ├── context/     # React Context for state management (Cart)
│   ├── data/        # Mock data for menus and categories
│   ├── pages/       # Application screens (Home, Explore, Payment, etc.)
│   ├── App.jsx      # Main application component & routing
│   ├── index.css    # Global styles & Tailwind directives
│   └── main.jsx     # Entry point
├── package.json     # Project dependencies and scripts
└── vite.config.js   # Vite configuration
```

## 🔗 Routing Information

| Path       | Component  | Description                               |
| :--------- | :--------- | :---------------------------------------- |
| `/`        | `Welcome`  | Landing page for new users                |
| `/login`   | `Login`    | User authentication page                  |
| `/signup`  | `SignUp`   | Account creation page                     |
| `/home`    | `Home`     | Public home page overview                 |
| `/explore` | `Explore`  | **Protected**: Browse full menu           |
| `/orders`  | `MyOrders` | **Protected**: View current order details |
| `/payment` | `Payment`  | **Protected**: Finalize order and pay     |

---

Developed with ❤️ by the Chuks Kitchen Team.

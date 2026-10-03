import { createElement } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CartItemsPage from "./pages/cart/CartItemsPage";
import ProductListPage from "./pages/products/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";

export const router = createBrowserRouter([
  {
    path: "/",
    element: createElement(ShopApplicationWrapper),
    children: [
      {
        path:'/',
        element:createElement(App),
      },
      {
        path: "/womens",
        element: createElement(ProductListPage),
      },
      {
        path: "/cart-items",
        element: createElement(CartItemsPage),
      },
    ],
  },
]);

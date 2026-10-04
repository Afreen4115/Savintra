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
        element:<App/>,
      },
      {
        path: "/women",
        element: <ProductListPage categoryType={'WOMEN'}/>,
      },
      {
        path:'/men',
        element:<ProductListPage categoryType={'MEN'}/>
      },
      {
        path:'/kids',
        element:<ProductListPage categoryType={'KIDS'}/>
      },
      {
        path: "/cart-items",
        element: <CartItemsPage/>,
      },
    ],
  },
]);

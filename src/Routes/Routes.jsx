import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import UseAdmin from "../hooks/UseAdmin";
import AdminRoute from "./AdminRoute/AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      }
    ]
  },
  {
    path: 'dashboard',
    element: 
      <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
   ,
    children: [
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      //admin routes
      {
        path: 'users',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
        
      },
    ]
  }
]);

export default router
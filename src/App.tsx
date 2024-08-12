import './App.css'
import Navbar from "./components/Navbar.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import DetailedPage from './pages/DetailedPage.tsx';
import CartPage from "./pages/CartPage.tsx";

// TODO: Add default routing to error page
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "items/:id",
      element: <DetailedPage />
    }
    ,{
      path: "cart/",
      element: <CartPage />
    }
  ]
)

function App() {

  return (
    <>
       <Navbar/>
       <RouterProvider router={router} />
    </>
  )
}

export default App

import './App.css'
import Navbar from "./components/Navbar.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import DetailedPage from './pages/DetailedPage.tsx';

// TODO: Add default routing to error page
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "item/",
      element: <DetailedPage />
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

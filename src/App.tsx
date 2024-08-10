import './App.css'
import Navbar from "./components/Navbar.tsx";
import Header from "./components/Header.tsx";
import DetailedItemView from "./components/DetailedItemView/DetailedItemView.tsx";

function App() {

  return (
    <>
        <Navbar />
        <DetailedItemView artist={"Arctic Monkeys"} description={"Newest album t-shirt"} price={100} image={"https://placehold.co/300x500"} />
    </>
  )
}

export default App

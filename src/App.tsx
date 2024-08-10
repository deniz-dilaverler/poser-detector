import './App.css'
import Navbar from "./components/Navbar.tsx";

function App() {

  return (
    <>
        <Navbar />
      <h1 className="main-title">This is the main title</h1>
      <h2 className="artist-title">This is the artist title (secondary title)</h2>
        <p className="description">This is the description</p>
    </>
  )
}

export default App

import Header from "../components/Header";
import ItemBox from "../components/HomeView/ItemBox";
import "../styles/HomePage.css"
import { getItemIds } from "../data/models";



export default function HomePage() {
  const item_ids = getItemIds()

  let item_elements = item_ids.map((id) => <div className="home-item"><ItemBox item_id={id} /></div>)
  return (
    <>
      <Header />
      <div className="home-content">
        {item_elements}
      </div>
    </>
  )
}



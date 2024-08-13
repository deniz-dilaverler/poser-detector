import "../../styles/ItemBox.css"
import { getItemById } from "../../data/models"
import { useNavigate } from "react-router-dom"

interface ItemBoxProp {
  item_id: number
}

export default function ItemBox(props: ItemBoxProp) {
  const navigate = useNavigate()
  function handleOnclick() {
    navigate("/items/" + props.item_id)
  }

  let item = getItemById(props.item_id)
  let img_file_name = item.images[0]

  return (
    <div className="item-parent-container" onClick={handleOnclick}>
      <div className="image-container">
        <img src={"/tshirts/" + img_file_name + ".png"} />
      </div>
      <div >
        <p className="artist-title">{item.artist}</p>
        <p className="description">{item.description}</p>
      </div>
    </div>
  )
}

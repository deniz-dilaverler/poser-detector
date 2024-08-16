import "../../styles/ItemBox.css"
import { getItemById } from "../../data/models"

interface ItemBoxProp {
  item_id: number
}

export default function ItemBox(props: ItemBoxProp) {
  let item = getItemById(props.item_id)
  let img_file_name = item.images[0]

  return (
    <a href={"/items/" + props.item_id}>
      <div className="item-parent-container" >
        <div className="image-container">
          <img src={"/tshirts/" + img_file_name + ".png"} />
        </div>
        <div >
          <p className="artist-title">{item.artist}</p>
          <p className="description">{item.description}</p>
        </div>
      </div>
    </a>
  )
}

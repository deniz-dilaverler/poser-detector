import "../../styles/ItemBox.css"
import testImage from "../../../public/tshirts/slayer_crowned_skull.png"
interface ItemBoxProp {
  item_id: number
}

export default function ItemBox(props: ItemBoxProp) {
  return (
    <div className="item-parent-container">
      <div className="image-container">
        <img src={testImage} />
      </div>
      <div >
        <p className="band-name-text">Band Name</p>
        <p className="desc-text">Description text example text</p>
      </div>
    </div>
  )
}

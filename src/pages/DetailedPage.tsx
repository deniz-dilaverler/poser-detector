import { useParams } from "react-router-dom"
import DetailedItemView from "../components/DetailedItemView/DetailedItemView.tsx";


export default function DetailedPage() {

  let { id } = useParams<string>()

  return (
    <DetailedItemView artist={"Arctic Monkeys"} description={"Car Tee"} price={30} image={"assets/tshirts/arctic_monkeys_logo_tshirt"} />
  )
}

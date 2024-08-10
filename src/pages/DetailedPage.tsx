import { useParams } from "react-router-dom"


export default function DetailedPage() {
  
  let { id } = useParams<string>()

  return (
    <p>ITEM PAGE FOR ID : {id} </p>
  )
}

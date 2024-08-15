import { useParams } from "react-router-dom"
import DetailedItemView from "../components/DetailedItemView/DetailedItemView.tsx";
import items from "../data/fixtures/items.json";
import useCartItems from '../data/useCartItems';
export default function DetailedPage() {

  let { id } = useParams<string>()
  const itemId: number = parseInt(id || "", 10);
  const item = items.find((item) => item.id === itemId);
  const { cartItems: _cartItems, addToCart, removeFromCart: _removeFromCart } = useCartItems();

  if (!item) {
    return <div>Item not found</div>;
  }
  return (
    <DetailedItemView artist={item.artist} description={item.description} price={item.price} id={item.id} images={item.images} addCart={(size) => addToCart(item, size)} />
  )
}

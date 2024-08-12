import itemData from "./fixtures/items.json"
export interface Item {
	id: number,
	artist: string,
	description: string,
	price: number,
	images: string[]
}

const items = itemData


export function getItemIds() {
	return items.map((item) => item.id)
}



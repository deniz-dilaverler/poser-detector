import itemData from "./fixtures/items.json"
export interface Item {
	id: number,
	artist: string,
	description: string,
	price: number,
	images: string[]
}

const items = itemData


export function getItemIds(): number[] {
	return items.map((item) => item.id)
}


export function getItemById(id: number): Item {
	let selected_item = items.find((item) => item.id === id)

	if (selected_item === null || selected_item === undefined) {
		throw new Error("No id with id: " + id)
	} else {
		return selected_item
	}
}

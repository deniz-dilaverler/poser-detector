import itemData from "./fixtures/items.json"
import songData from "./fixtures/songs.json"
export interface Item {
	id: number,
	artist: string,
	description: string,
	price: number,
	images: string[]
}
export interface GroupAnswers {
	answers: string[],
	basics: string[]
}

const items = itemData
const songs = songData


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

export function getArtistSongs(group_name: string): GroupAnswers {
	if (group_name in songs) {
		return songs[group_name]
	} else {
		throw new Error("No such group named " + group_name + " songs data")
	}
}

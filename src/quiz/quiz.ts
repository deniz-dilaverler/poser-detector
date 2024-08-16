import { getArtistSongs } from "../data/models"

export enum EntryResult {
	CORRECT, INCORRECT, WIN, BASIC, DUPLICATE
}

export enum EntryStatus {
	CORRECT, INCORRECT, BASIC
}
export interface Entry {
	word: string,
	status: EntryStatus
}


// For easier name matching, removes spaces and '-' and converts all letters to lowercase
function standardize(text: string): string {
	const punctuations = ["?", "-", ",", "."]
	punctuations.forEach((punctuation) => text = text.replace(punctuation, ""))
	text = text.replace(" ", "")

	text = text.toLowerCase()
	return text
}

function isGameOver(gameState: Entry[]) {
	const GOAL = 5
	let totalCorrect = 0

	for (let entry of gameState) {
		if (entry.status === EntryStatus.CORRECT)
			totalCorrect++
	}

	return totalCorrect >= GOAL
}

// game_state array is updated with ever made entry
// duplicates are not added to the game state
export function makeGuess(artistName: string, gameState: Entry[], entry: string): [EntryResult, Entry[]] {
	let entryStd = standardize(entry)

	// Check for duplicate
	for (let pastEntry of gameState) {
		let pastEntryStd = standardize(pastEntry.word)
		if (pastEntryStd === entryStd)
			return [EntryResult.DUPLICATE, gameState]
	}

	const groupSongs = getArtistSongs(artistName)

	// Check if entry is basic
	for (let basicSong of groupSongs.basics) {
		let basicSongStd = standardize(basicSong)
		if (basicSongStd === entryStd) {
			gameState.push({
				"word": entry,
				"status": EntryStatus.BASIC
			})

			return [EntryResult.BASIC, gameState]
		}
	}

	// Check if entry is a non-basic song of the group
	for (let answerSong of groupSongs.answers) {
		let answerSongStd = standardize(answerSong)
		if (answerSongStd === entryStd) {
			gameState.push({
				"word": entry,
				"status": EntryStatus.CORRECT
			})
			if (isGameOver(gameState))
				return [EntryResult.WIN, gameState]
			else
				return [EntryResult.CORRECT, gameState]
		}
	}

	// Entry is wrong
	gameState.push({
		"word": entry,
		"status": EntryStatus.INCORRECT
	})
	return [EntryResult.INCORRECT, gameState]
}

const genius = require('genius-lyrics')

class Lyrics {
	/**
	* @param {String} token A genius API token. If no token is provided, the data will be scraped
	*/
	constructor(token) {
		this.token = token || null

		this.client = new genius.Client(this.token||"")
	}

	/**
	 * @param {String} query What should the library search for?
	 * @param {Boolean} extra Do you want extra information like artist, title, etc or just the lyrics?
	 * @returns {Promise<Object>} A promise containing an object with your data
	*/
	fetch(query, extra=false) {
		return new Promise(async (res,rej) => {
			var results = (await this.client.songs.search(query))[0]

			var lyrics = await results.lyrics()

			var data = {
				title: "",
				artist: "",
				album: "",
				thumbnail: "",
				url: "",
				lyrics
			}

			if (extra) {
				data.title = results.title
				data.thumbnail = results.thumbnail
				data.url = results.url,
				data.artist = results.artist.name
				data.album = results.album
			}

			res(data)
		})
	}
}

module.exports = Lyrics
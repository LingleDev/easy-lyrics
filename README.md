# Easy Lyrics
This is a little module I made for my Discord bot to simplify the process of getting lyrics from Genius. It basically wraps [genius-lyrics](https://npmjs.com/package/genius-lyrics)

## Installation

```
npm i -s easy-lyrics
```

## Usage
The usage of this module is pretty simple:

```js
const Lyrics = require('easy-lyrics')
var lyrics = new Lyrics("optional-genius-api-key") // if no key is provided, the library will scrape data

(async () => {
	var results = await lyrics.fetch("blinding lights the weeknd", true) // if you want extra data besides the lyrics such as artist, title, etc, pass a true value for the 2nd parameter

	console.log(results)

	/*
		{
		title: 'Blinding Lights',
		artist: 'The Weeknd',
		thumbnail: 'https://images.genius.com/0b32bf010a7361676426365480c5cce8.300x300x1.jpg',
		url: 'https://genius.com/The-weeknd-blinding-lights-lyrics',
		lyrics: "..."
		}
	*/

})()
```

## Credit
This library wraps another module. [genius-lyrics](https://www.npmjs.com/package/genius-lyrics) by [zyrouge](https://github.com/zyrouge)

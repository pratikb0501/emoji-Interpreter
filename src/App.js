import { useState } from 'react'

let emojiObject = {
  "🙄": "Impatience",
  "😞": "Sad",
  "😊": "Smiling",
  "😡": "Annoyance",
  "❤️": "Love",
  "🤣": "Hilarious",
  "😃": "Grinning Face with Big Eyes",
  "🥡": "Takeout box",
  "😪": "Tired",
  "😀": "Grinning Face",
  "😂": "Face with Tears of Joy",
  "🤩": "Fascinated",
  "🙂": "Slightly Smiling Face",
  "😄": "Grinning Face with Smiling Eyes",
  "😅": "Grinning Face with Sweat",
  "🙃": "Upside-Down Face",
  "😁": "Beaming Face with Smiling Eyes",
  "😳": "Disbelief",
  "😆": "Grinning Squinting Face",
  "😔": "Sad",
  "😑": "Annoyance",
  "😙": "Kissing Face with Smiling Eyes",
  "😉": "Winking Face",
  "😇": "Smiling Face with Hearts",
  "😘": "Face Blowing a Kiss",
  "😗": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😍": "Smiling Face with Heart-Eyes",
};

let emojis = Object.keys(emojiObject);

function App() {
  let [emoticonMeaning, setEmoticonMeaning] = useState("Emoji Translation will be displayed here");

  function handleClick(emoji) {
    setEmoticonMeaning(emojiObject[emoji]);
  }

  function handleInput(e) {
    let enteredEmoji = e.target.value;
    if (enteredEmoji in emojiObject) {
      setEmoticonMeaning(emojiObject[enteredEmoji])
    } else {
      setEmoticonMeaning("Entered emoji is not present in our database");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Emoji Interpreter</p>
      </header>
      <div className="container">
        <div className="input--div">
          <input className="input--emoji" type="text" onInput={handleInput} placeholder="Enter your emoji here.." />
        </div>
        <div className="div--emoticonMeaning">{emoticonMeaning}</div>
        <div>
          <p>Emojis we know</p>
          <p >
            {
              emojis.map(emo => (
                <span className="span--emoji" onClick={() => handleClick(emo)} key={emo}>{emo}</span>
              ))
            }
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

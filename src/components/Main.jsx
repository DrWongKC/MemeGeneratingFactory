import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "Fill in top text here",
    bottomText: "Fill in bottom text here",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  function handleChange(event) {
    const { value, name } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            onChange={handleChange}
            placeholder="test text top"
            name="topText"
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            onChange={handleChange}
            placeholder="test text bottom"
            name="bottomText"
          />
        </label>
        <button>Get a new meme image</button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}

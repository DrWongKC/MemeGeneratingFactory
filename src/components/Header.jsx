import trollFace from "../images/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} />
      <h1>Meme Generating Factory</h1>
    </header>
  );
}

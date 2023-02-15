import "./styles.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90
};

export default function App() {
  return (
    <div className="App">
      {user.name}
      <br />
      <img style={{ height: user.imageSize }} src={user.imageUrl} />
    </div>
  );
}

import React from "react";
import "./App.css";

const sunsets = [
  "https://images.pexels.com/photos/561463/pexels-photo-561463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1420440/pexels-photo-1420440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1212600/pexels-photo-1212600.jpeg",
  "https://images.pexels.com/photos/585759/pexels-photo-585759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/267151/pexels-photo-267151.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
];

function App() {
  return (
    <div className="App">
      <h1>Awesome Sunset Photogrid</h1>
      <div className="sunsets">
        {sunsets.map(src => (
          <img key={src} src={src} alt="Sunset" />
        ))}
      </div>
    </div>
  );
}

export default App;

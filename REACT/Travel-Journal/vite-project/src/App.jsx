import "./App.css";
import Places from "./Component/Places";
import Header from "./Component/Header";
import Fuji from "./assets/mountfuji.avif";
import data from "./data.js";

function App() {
  const enteyElements = data.map((entry) => {
    return (
      <Places
        key={entry.id}
        img={entry.img}
        place={entry.title}
        country={entry.country}
        date={entry.dates}
        description={entry.text}
      />
    );
  });
  return (
    <>
      <Header />
      {enteyElements}
    </>
  );
}

export default App;

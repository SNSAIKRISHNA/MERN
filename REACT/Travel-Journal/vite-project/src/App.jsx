import "./App.css";
import Places from "./Component/Places";
import Header from "./Component/Header";
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
      <h1 className="h1-txt">The Places I've Visited</h1>
      {enteyElements}
    </>
  );
}

export default App;

import markerImg from "../assets/marker.png";

function Places(props) {
  console.log(props);
  return (
    <article className="place-card">
      <div className="main-img-container">
        <img
          className="main-img"
          src={props.img.src}
          alt={props.img.alt}
        />
      </div>

      <div className="info-container">
        <div className="location-row">
          <img className="marker" src={markerImg} alt="Marker" />
          <span className="country">{props.country}</span>
          
          <a
            href={`https://en.wikipedia.org/wiki/${props.country}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Wikipedia
          </a>
        </div>

        <h2 className="entry-title">{props.place}</h2>
        <p className="trip-dates">{props.date}</p>
        <p className="entry-text">{props.description}</p>
      </div>
    </article>
  );
}

export default Places;

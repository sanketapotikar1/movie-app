import logo from "./logo.svg";
import "./App.css";

function App() {
  const movie = [
    {
      title: "RRR",
      link:"https://pbs.twimg.com/media/FDcMuCUVEAUQsQM?format=jpg&name=medium",
      Rating: "5",
      Discription: "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.",
    },
    {
      title: "Star Wars - The Force Awakens",
      link: "https://www.komar.de/en/media/catalog/product/cache/5/image/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg",
      Rating: "4",
      Discription: "Set thirty years after Return of the Jedi, The Force Awakens follows Rey, Finn, Poe Dameron, and Han Solo's search for Luke Skywalker and their fight in the Resistance, led by General Leia Organa and veterans of the Rebel Alliance, against Kylo Ren and the First Order, a successor to the Galactic Empire.",
    },
    {
      title: "Bell Bottom",
      link: "https://1.bp.blogspot.com/-tdSc2ziLV0A/XjAXTV87hII/AAAAAAAAQI8/Vgv_3Rlyi5U4rxDHTQkTQjC62Wqhlz55gCLcBGAsYHQ/s1600/Bell-Bottom-movie-release-date-star-cast-poster.jpg",
      Rating: "3",
      Discription: "The story is inspired by real-life hijacking events in India by Khalistani separatists (a Sikh separatist movement seeking to create a homeland for Sikhs by establishing a sovereign state called Khalistan) during the 1980s, such as the Indian Airlines Flight 423, 405 and 421 hijackings",
    },
    
  ];

  return (
    <div className="App">
      {movie.map((movie) => (
        <Poster title= {movie.title} link= {movie.link} Rating={movie.Rating} Discription = {movie.Discription}/>
      ))}
    </div>
  );
}

export default App;

function Poster(props) {
  return(
  <div className="movie-block">
    <img className="link" src={props.link} />
    <h1>{props.title}</h1>
    <h4>Rating : {props.Rating}⭐</h4>
    <p>{props.Discription}</p>
  </div>);
}

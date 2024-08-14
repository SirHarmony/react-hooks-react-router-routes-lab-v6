import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actorsData, setActorsData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/actors`)
      .then((res) => res.json())
      .then((data) => setActorsData(data));
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        <article>
          {actorsData.map((actorData) => {
            return (
              <div key={actorData.id}>
                <h2>{actorData.name}</h2>
                <ul>
                  {actorData.movies.map((movie) => (
                    <li>{movie}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </article>
      </main>
    </>
  );
}

export default Actors;

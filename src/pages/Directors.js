import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directorsData, setDirectorsData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/directors`)
      .then((res) => res.json())
      .then((data) => setDirectorsData(data));
  });

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        <article>
          {directorsData.map((directorData) => {
            return (
              <div key={directorData.id}>
                <h2>{directorData.name}</h2>
                <ul>
                  {directorData.movies.map((movie) => (
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

export default Directors;

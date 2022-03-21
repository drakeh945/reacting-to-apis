import React, { useState, useEffect, useLayoutEffect } from "react";

const FilmData = (props) => {
  let wantFilms = props.wantFilms;

  const [films, setFilms] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/films");
      const allFilms = await res.json();
      setFilms(allFilms);
    })();
  }, []);
  return (
    <>
      {films.map((film) => (
        <div className="card m-2" key={`film-card-${film.id}`}>
          <h2>{film.title}</h2>
          <p>{film.description}</p>
        </div>
      ))}
    </>
  );
};

export default FilmData;

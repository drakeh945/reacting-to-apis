import React, { useState, useEffect } from "react";

const PeopleData = (props) => {
  let wantPeople = props.wantPeople;

  const [people, setPeople] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://ghibliapi.herokuapp.com/people");
      const allPeople = await res.json();
      setPeople(allPeople);
    })();
  }, []);
  return (
    <>
      {people.map((person) => (
        <div>
          <h2> {person.name}</h2>
          <p>{person.age}</p>
          <p>{person.gender}</p>
          <p>
            <a href={person.url}>{person.url}</a>
          </p>
        </div>
      ))}
    </>
  );
};
export default PeopleData;

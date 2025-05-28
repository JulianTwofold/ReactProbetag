import React from 'react'
import { useState } from "react";
import { useEffect } from 'react';

 interface User {
        id: number;
        name: string;
}

const FetchApi = () => {
    const [persons, setPersons] = useState<User[] | null>(null);

    useEffect(() => {
    fetch('./src/users.json')
      .then((response) => response.json())
      .then((json) => setPersons(json));
  }, []);

 return (
    <div>
      {persons ? (
        <>{
          persons.map((person) => {
           <div> {person.name} a</div>
          })
          }</>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchApi
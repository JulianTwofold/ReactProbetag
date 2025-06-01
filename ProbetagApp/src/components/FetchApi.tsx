import React, { useEffect, useState } from "react"; 

//unfinished
interface User { 
  id: number;
  name: string;
}

const FetchApi = () => {
  const [persons, setPersons] = useState<User[] | null>(null);

  useEffect(() => {
    fetch('/users.json') //Moved to public
      .then((response) => response.json())
      .then((json) => setPersons(json));
  }, []);

  return (
    <div>
      {persons ? (
        <>
          {persons.map((person) => (
            <div key={person.id}>{person.name} test</div>
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchApi;
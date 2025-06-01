import React, { useEffect, useState } from "react";

interface User {
  id: number;
  firstname: string;
  address: {
    street: string;
  };
}

interface Props {
  userId?: number;
}

const FetchApi = ({ userId }: Props) => {
  const [persons, setPersons] = useState<User[] | null>(null);
  //API Doesnt work. Only id=1 shows 1 user (https://jsonplaceholder.org/users?id=1)
  let url = `/api/users?id=${userId}`;

  const getFallbackData = async (): Promise<User[]> => {
    const response = await fetch("/users.json");
    return response.json();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId === 0) {
          url = "/api/users";
          userId = -1;
        }
        if (!userId) {
          console.log("Falllllllllllllllllbackkkkkkkkkkkkkkkk");
          const fallbackData = await getFallbackData();
          setPersons(fallbackData);
          return;
        }
        const response = await fetch(url);
        if (!response.ok) {
          const fallbackData = await getFallbackData();
          setPersons(fallbackData);
          return;
        }

        const data = await response.json();
        if (userId === -1) {
          setPersons(data);
        }
        else{
        setPersons([data]);
        }
      } catch {
        const fallbackData = await getFallbackData();
        setPersons(fallbackData);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      {persons ? (
        persons.map((person) => (
          <div key={person.id}>
            <div>Name: {person.firstname}</div>
            <div>Strasse: {person.address.street}</div>
            <br />
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FetchApi;

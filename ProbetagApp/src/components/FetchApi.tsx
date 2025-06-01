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
  local?: boolean;
}

const FetchApi = ({ userId, local }: Props) => {
  const [persons, setPersons] = useState<User[] | null>(null);

  const getFallbackData = async (): Promise<User[]> => {
    const response = await fetch("/users.json");
    return response.json();
  };

  const search = userId ? `?id=${userId}` : "";
  const url = "/api/users" + search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Load local JSON file if desired
        if (local) {
          const fallbackData = await getFallbackData();
          setPersons(fallbackData);
          return;
        }
        //Used API is a mock API only id=1 works. All other return everything
        const response = await fetch(url);
        if (!response.ok) {
          const fallbackData = await getFallbackData();
          setPersons(fallbackData);
          return;
        }

        const data = await response.json();
        const normalizedData = Array.isArray(data) ? data : [data];
        setPersons(normalizedData);
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

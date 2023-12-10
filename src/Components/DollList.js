import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DollList = () => {
  const [dolls, setDolls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://656bd32de1e03bfd572dd99f.mockapi.io/DollHouse')
      .then(response => {
        setDolls(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching doll data: ', error);
        setError('An error occurred while fetching doll data.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }


  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Doll List</h2>
      <ul>
        {dolls.map(doll => (
          <li key={doll.id}>
            <h3>{doll.name}</h3>
            <p>{doll.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DollList;
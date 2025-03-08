// filepath: c:\Users\Miguel Perico\websys_project\frontend\src\components\User.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cats from './Cats';
import Dogs from './Dogs';

function User() {
  const [activeTab, setActiveTab] = useState('cats');
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await axios.get('/api/cats');
        setCats(response.data);
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    const fetchDogs = async () => {
      try {
        const response = await axios.get('/api/dogs');
        setDogs(response.data);
      } catch (error) {
        console.error('Error fetching dogs:', error);
      }
    };

    fetchCats();
    fetchDogs();
  }, []);

  return (
    <div>
      <h2>User Page</h2>
      <nav>
        <button onClick={() => setActiveTab('cats')}>Cats</button>
        <button onClick={() => setActiveTab('dogs')}>Dogs</button>
      </nav>
      {activeTab === 'cats' && <Cats isAdmin={false} items={cats} />}
      {activeTab === 'dogs' && <Dogs isAdmin={false} items={dogs} />}
    </div>
  );
}

export default User;
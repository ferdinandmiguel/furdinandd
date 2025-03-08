// filepath: c:\Users\Miguel Perico\websys_project\frontend\src\components\Admin.jsx
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPets = async () => {
      const catsResponse = await axios.get('/api/cats');
      setCats(catsResponse.data);
      const dogsResponse = await axios.get('/api/dogs');
      setDogs(dogsResponse.data);
    };
    fetchPets();
  }, []);

  const handleDeleteCat = async (id) => {
    await axios.delete(`/api/cats/${id}`);
    setCats(cats.filter(cat => cat._id !== id));
  };

  const handleDeleteDog = async (id) => {
    await axios.delete(`/api/dogs/${id}`);
    setDogs(dogs.filter(dog => dog._id !== id));
  };

  const handleEditCat = (id) => {
    navigate(`/edit-cat/${id}`);
  };

  const handleEditDog = (id) => {
    navigate(`/edit-dog/${id}`);
  };

  return (
    <div className="container mx-auto p-4 bg-white text-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <Link to="/add-cat" className="btn btn-primary mb-4">
        Add Cat
      </Link>
      <Link to="/add-dog" className="btn btn-primary mb-4">
        Add Dog
      </Link>
      <div>
        <h2 className="text-xl font-semibold mb-2">Cats List</h2>
        <ul>
          {cats.map((cat) => (
            <li key={cat._id} className="mb-2">
              <div className="card p-4 shadow-md flex items-center bg-white text-black">
                {cat.image && (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-24 h-24 object-cover mr-4"
                  />
                )}
                <div className="flex-grow">
                  <p><strong>Name:</strong> {cat.name}</p>
                  <p><strong>Gender:</strong> {cat.gender}</p>
                  <p><strong>Description:</strong> {cat.description}</p>
                  <p><strong>Rescue Date:</strong> {cat.rescue_date}</p>
                  <p><strong>Health Status:</strong> {cat.health_status}</p>
                  <p><strong>Adopted:</strong> {cat.adopted}</p>
                </div>
                <div className="flex flex-col ml-4">
                  <button
                    onClick={() => handleDeleteCat(cat._id)}
                    className="btn btn-danger hover:bg-red-600 mb-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditCat(cat._id)}
                    className="btn btn-success hover:bg-green-500"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Dogs List</h2>
        <ul>
          {dogs.map((dog) => (
            <li key={dog._id} className="mb-2">
              <div className="card p-4 shadow-md flex items-center bg-white text-black">
                {dog.image && (
                  <img
                    src={dog.image}
                    alt={dog.name}
                    className="w-24 h-24 object-cover mr-4"
                  />
                )}
                <div className="flex-grow">
                  <p><strong>Name:</strong> {dog.name}</p>
                  <p><strong>Gender:</strong> {dog.gender}</p>
                  <p><strong>Description:</strong> {dog.description}</p>
                  <p><strong>Rescue Date:</strong> {dog.rescue_date}</p>
                  <p><strong>Health Status:</strong> {dog.health_status}</p>
                  <p><strong>Adopted:</strong> {dog.adopted}</p>
                </div>
                <div className="flex flex-col ml-4">
                  <button
                    onClick={() => handleDeleteDog(dog._id)}
                    className="btn btn-danger hover:bg-red-600 mb-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditDog(dog._id)}
                    className="btn btn-success hover:bg-green-500"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Admin;
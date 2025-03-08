// filepath: c:\Users\Miguel Perico\websys_project\frontend\src\components\Cats.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Cats = ({ isAdmin, items }) => {
  return (
    <div>
      <h2>Cats</h2>
      {isAdmin && (
        <Link to="/add-cat" className="btn btn-primary mb-4">
          Add Cat
        </Link>
      )}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>
              <p>Name: {item.name}</p>
              <p>Gender: {item.gender}</p>
              <p>Description: {item.description}</p>
              <p>Rescue Date: {item.rescue_date}</p>
              <p>Health Status: {item.health_status}</p>
              <p>Adopted: {item.adopted}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cats;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDog = () => {
  const [dog, setDog] = useState({
    name: '',
    gender: '',
    description: '',
    rescue_date: '',
    health_status: '',
    adopted: 'no',
    image: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDog({ ...dog, [name]: value });
  };

  const handleImageChange = (e) => {
    setDog({ ...dog, image: URL.createObjectURL(e.target.files[0]) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/dogs', dog);
    navigate('/admin');
  };

  const handleBack = () => {
    navigate('/admin');
  };

  return (
    <div className="container mx-auto p-4 bg-slate-100">
      <button onClick={handleBack} className="btn btn-secondary mb-4 bg-slate-400">Back</button>
      <h1 className="text-2xl font-bold mb-4 text-slate-950">Add Dog</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="block text-slate-950">Name</label>
          <input
            type="text"
            name="name"
            value={dog.name}
            onChange={handleChange}
            className="input input-bordered w-full bg-slate-300 text-slate-950"
          />
        </div>
        <div className="mb-2">
          <label className="block text-slate-950">Gender</label>
          <input
            type="text"
            name="gender"
            value={dog.gender}
            onChange={handleChange}
            className="input input-bordered w-full bg-slate-300 text-slate-950"
          />
        </div>
        <div className="mb-2">
          <label className="block text-slate-950">Description</label>
          <textarea
            name="description"
            value={dog.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full bg-slate-300 text-slate-950"
          ></textarea>
        </div>
        <div className="mb-2">
          <label className="block text-slate-950">Rescue Date</label>
          <input
            type="date"
            name="rescue_date"
            value={dog.rescue_date}
            onChange={handleChange}
            className="input input-bordered w-full bg-slate-300 text-slate-950"
          />
        </div>
        <div className="mb-2">
          <label className="block text-slate-950">Health Status</label>
          <input
            type="text"
            name="health_status"
            value={dog.health_status}
            onChange={handleChange}
            className="input input-bordered w-full bg-slate-300 text-slate-950"
          />
        </div>
        <div className="mb-2">
          <label className="block text-slate-950">Adopted</label>
          <div className="flex items-center">
            <label className="mr-2 text-slate-950">
              <input
                type="radio"
                name="adopted"
                value="yes"
                checked={dog.adopted === 'yes'}
                onChange={handleChange}
                className="radio"
              />
              Yes
            </label>
            <label className='text-slate-950'>
              <input
                type="radio"
                name="adopted"
                value="no"
                checked={dog.adopted === 'no'}
                onChange={handleChange}
                className="radio"
              />
              No
            </label>
          </div>
        </div>
        <div className="mb-2">
          <label className="block text-slate-950">Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="input w-full bg-slate-100 text-slate-950"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">
          Add Dog
        </button>
      </form>
    </div>
  );
};

export default AddDog;
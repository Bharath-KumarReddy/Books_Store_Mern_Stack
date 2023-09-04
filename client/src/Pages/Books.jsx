import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books/getall');
        const data = response.data.books;
        setBooks(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/books/delete/${id}`);
      setBooks(books.filter(book => book._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
      <>
      <Navbar/>
    <div className='bg-dark' style={{ minHeight: '91.5vh' }}>
      <div className='d-flex justify-content-center align-items-center py-3'>
        <h3 style={{ color: 'orange' }}>Books Section</h3>
      </div>
      <div className='container'>
        <div className='row'>
          {books.map(book => (
            <div key={book._id} className='col-md-4 mb-4'>
              <div className='card' style={{ position: 'relative' }}>
                <img src={book.image} alt="image" className='image1' style={{ width: '100%', height: '90%', objectFit: 'cover' }} />
                <div className='card-body' style={{ paddingLeft: '10%', paddingTop: '10px' }}>
                  <h5 className='card-title'> <span>name : </span>{book.name}</h5>
                  <p className='card-text'> <span>author : </span>{book.author}</p>
                  <p className='card-text'><span>description : </span>{book.description}</p>
                  <p className='card-text'><span>Price : </span>{book.price}</p>
                  <Link to={`/update/${book._id}`} className='btn btn-warning'>Update</Link>
                  <button className='btn btn-danger' onClick={() => handleDelete(book._id)} style={{ marginLeft: "30px" }}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Books;
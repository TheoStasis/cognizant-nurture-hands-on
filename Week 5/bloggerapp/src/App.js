import React from 'react';
import './App.css';

export const books = [
  { id: 101, bname: 'Master React', price: 670 },
  { id: 102, bname: 'Deep Dive into Angular 11', price: 800 },
  { id: 103, bname: 'Mongo Essentials', price: 450 },
];

const courses = ['Angular', 'React'];
const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Biz', excerpt: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schewzdenier', excerpt: 'You can install React from npm.' }
];

function App() {
  const bookdet = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </ul>
  );

  const coursedet = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
       {courses.map((course, index) => (
         <div key={index}>
            <h2>{course}</h2>
            <h4>4/5/2021</h4>
         </div>
       ))}
    </ul>
  );

  const content = (
    <div style={{textAlign: 'left'}}>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <h2>{blog.title}</h2>
          <h4>{blog.author}</h4>
          <p>{blog.excerpt}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="container">
      <div className="mystyle1">
        <h1>Course Details</h1>
        {coursedet}
      </div>
      <div className="st2">
        <h1>Book Details</h1>
        {bookdet}
      </div>
      <div className="v1">
        <h1>Blog Details</h1>
        {content}
      </div>
    </div>
  );
}

export default App;
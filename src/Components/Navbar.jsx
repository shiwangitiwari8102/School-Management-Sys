import React from 'react';


function Navbar() {
  return (
    <>
    <header>
      <nav className="nav bg-secondary fixed-top">
        <div className="logo">
          <img src="https://play-lh.googleusercontent.com/fb8Yy0W1XpkvjE60CQPHXUi2mMv9hfC3v-saNLtHrwou9D1noZef_rOfO-sqFvtNaGk" alt="School Logo" />
        
          
        </div>
        <a className="text-warning name" href="#">RD Public School</a>
        <a className="nav-link active text-light" href="#home">Home</a>
        <a className="nav-link active text-light" href="#about">About</a>
        <a className="nav-link active text-light" href="#Admission">Admission</a>
        <a className="nav-link active text-light" href="#youtube">YouTube</a>
        <a className="nav-link active text-light" href="#Facilities">Facilities</a>
        </nav>
    </header>
    </>
  );
}

export default Navbar;




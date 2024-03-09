import React from 'react';

function Footer (){
  return (
    <footer className="footer bg-dark text-light">
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="#">Facebook</a></li>
              <li className="list-inline-item"><a href="#">Twitter</a></li>
              <li className="list-inline-item"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2024 RD ublic School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

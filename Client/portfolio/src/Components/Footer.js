// Footer.js

import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} Kareem & Saher Portfolio Project
        </p>
      </div>
    </footer>
  );
}

export default Footer;

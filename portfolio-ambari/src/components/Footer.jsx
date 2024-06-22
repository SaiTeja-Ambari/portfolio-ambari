import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
        <p className="mb-2">Email: your.email@example.com</p>
        <p className="mb-2">Phone: (123) 456-7890</p>
        <div className="mt-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mr-4 hover:text-gray-300">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
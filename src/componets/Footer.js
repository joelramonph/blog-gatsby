import React from "react";

const Footer = () => {
  return (
    <p className="page-footer">
      &copy; {new Date().getFullYear()} <span>simplerecipes</span>. Built with{" "}
      <a href="https://www.gatsbyjs.com/">Gatsby</a>
      
    </p>
  );
};

export default Footer;

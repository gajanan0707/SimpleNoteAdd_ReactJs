import React from "react"

const Footer = () => {
    const year=new Date().getFullYear();
  return (
    <>
     <footer className="footer">
        <p>copyright <i className="fa fa-copyright" aria-hidden="true"></i> {year}</p> 
     </footer>
    </>
  );
};

export default Footer;
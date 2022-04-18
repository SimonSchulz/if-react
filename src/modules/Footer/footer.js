import "../Container/style.css"
import "./footer.css"
import React from 'react';
import Column from "./column";

const Footer = () => {
    const firstColumn = ['About', 'How Triphouse works', 'Careers', 'Privacy', 'Terms'];
    const secondColumn = ['Property types', 'Guest houses', 'Hotels', 'Apartments', 'Villas', 'Holiday homes', 'Hostels'];
    const thirdColumn = ['Support', 'Contact Customer Service', 'FAQ'];
    return (
        <footer>
        <div className="Container">
            <div className="footer-wrapper">
            <Column data={firstColumn} />
            <Column data={secondColumn} />
            <Column data={thirdColumn} />
            </div>
            <p className="copyright">&copy; 2020 Triphouse, Inc. All rights reserved</p>
        </div>
        </footer>
    );
};

export default Footer;
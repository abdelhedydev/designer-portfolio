import React from 'react';
import PropTypes from 'prop-types';
import Switch from '../Switch';
import FooterStyle from './FooterStyle';

const Footer = ({ className }) => (
  <footer className={className}>
    <div className="icons">
      <i className="fab fa-twitter" />
      <i className="fas fa-basketball-ball" />
      <i className="fab fa-linkedin" />
      <i className="fab fa-instagram" />
      <i className="fab fa-facebook" />
    </div>
    <Switch />
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};
export default FooterStyle(Footer);

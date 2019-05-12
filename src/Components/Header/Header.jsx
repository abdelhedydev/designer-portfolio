import React from 'react';
import PropTypes from 'prop-types';
import HeaderStyle from './HeaderStyle';

const Header = ({ className }) => (
  <header className={className}>
    <img src="/images/cody__logo.svg" className="header__logo" alt="" />
    <p className="header__point">?</p>
  </header>
);
Header.propTypes = {
  className: PropTypes.string,
};

export default HeaderStyle(Header);

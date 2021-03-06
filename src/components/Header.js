import PropTypes from 'prop-types';
import React from 'react';

import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={() => onAdd()}
      />
    </header>
  );
};

// DEFAULT PROPS
Header.defaultProps = {
  title: 'Task Tracker',
};

Header.prototypes = {
  title: PropTypes.string,
};

// CS
// const headingStyle = { color: 'red', backgroundColor: 'black' };

export default Header;

import React from 'react';
// import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>US COVID19 Tracker</p>
        <ul>
          <li>
            <a href="covid19-international-tracker.netlify.app/">World Tracker</a>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;

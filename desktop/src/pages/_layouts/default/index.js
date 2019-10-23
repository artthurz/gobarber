import React from 'react';
import PropTypes from 'prop-types';

import Menu from '~/components/Menu';
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <div>
      <aside>
        <Menu />
        {children}
      </aside>
      <Footer />
      </div>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

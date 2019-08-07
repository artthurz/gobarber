import React from 'react';
import PropTypes from 'prop-types';
// import TitleBar from '~/electron/TitleBar';

import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      {/* <TitleBar /> */}
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

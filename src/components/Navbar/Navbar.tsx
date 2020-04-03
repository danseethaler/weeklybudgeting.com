import React from 'react';
import FlexContainer from '../layout/FlexContainer';
import SliceContainer from '../layout/SliceContainer';
import {Logo, NavContainer, NavLink} from './Navbar.styles';

const Navbar: React.FC = () => (
  <SliceContainer>
    <FlexContainer
      row
      align="center"
      justify="space-between"
      wPadding={[0]}
      customStyles={{height: 80}}>
      <Logo />
      <NavContainer>
        <NavLink to="/faqs">FAQs</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/podcast">Podcast</NavLink>
        <NavLink to="/support">Support</NavLink>
      </NavContainer>
    </FlexContainer>
  </SliceContainer>
);

export default Navbar;

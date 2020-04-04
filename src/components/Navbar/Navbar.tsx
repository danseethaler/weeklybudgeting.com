import React from 'react';
import {useStyledTheme} from '../../config/styled';
import Button from '../Button';
import FlexContainer from '../layout/FlexContainer';
import SliceContainer from '../layout/SliceContainer';
import {Logo, MobileNavButton, NavContainer, NavLink} from './Navbar.styles';

const Navbar: React.FC = () => {
  const theme = useStyledTheme();

  return (
    <SliceContainer>
      <FlexContainer
        row
        align="center"
        justify="space-between"
        wPadding={[theme.smallDevice ? 2 : 0]}
        customStyles={{height: theme.smallDevice ? null : 80}}>
        <Logo />
        {theme.smallDevice ? (
          <NavContainer>
            <MobileNavButton />
          </NavContainer>
        ) : (
          <NavContainer>
            <NavLink to="/faqs">FAQs</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/podcast">Podcast</NavLink>
            <NavLink to="/support">Support</NavLink>
          </NavContainer>
        )}
        {!theme.smallDevice && <Button text="Get the App" />}
      </FlexContainer>
    </SliceContainer>
  );
};

export default Navbar;

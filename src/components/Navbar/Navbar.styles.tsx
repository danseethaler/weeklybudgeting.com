import {Link} from 'gatsby';
import React, {useState} from 'react';
import logo from '../../assets/logo_name.png';
import styled from '../../config/styled';

export const NavContainer = styled.nav(({theme}) => ({
  display: 'flex',
  flex: 1,
  justifyContent: theme.smallDevice ? 'flex-end' : 'center',
  paddingRight: theme.smallDevice ? 0 : theme.baseUnit * 1,
  maxWidth: theme.containerWidth,
}));

const LogoImg = styled.img(({theme}) => ({
  height: theme.smallDevice ? 38 : 44,
}));

export const Logo: React.FC = () => (
  <Link to="/">
    <LogoImg src={logo} />
  </Link>
);

export const NavLink = styled(Link)(({theme}) => ({
  color: theme.colors.subheader,
  fontSize: theme.fontUnit * 4.5,
  fontFamily: theme.fontFamily.default,
  letterSpacing: '0px',
  lineHeight: '1.2',
  fontWeight: theme.fontWeight.medium,
  textDecoration: 'none',
  margin: `0 ${theme.baseUnit * 2}px`,
}));

const MobileNavButtonContainer = styled.button<{open: boolean}>(
  ({theme, open}) => ({
    position: 'fixed',
    top: theme.baseUnit * 2,
    right: theme.baseUnit * 2,
    borderRadius: theme.baseUnit / 2,
    backgroundColor: open ? theme.colors.white : '#F0FFFA',
    transition: theme.transition,
    border: 'none',
    padding: 0,
    zIndex: 2,
  }),
);

const MobileNavButtonBar = styled.div(({theme}) => ({
  width: theme.baseUnit * 4,
  height: theme.baseUnit / 2,
  margin: theme.baseUnit / 1,
  borderRadius: theme.baseUnit / 2,
  backgroundColor: '#49E9B6',
  transition: theme.transition,
}));

const MobileNavMenuContainer = styled.div<{open: boolean}>(({theme, open}) => ({
  height: 'calc(100%)',
  position: 'fixed',
  paddingTop: 30,
  top: open ? -30 : 'calc(-100% - 30px)',
  left: 0,
  right: 0,
  backgroundColor: theme.colors.background100,
  transition: theme.transition,
}));

const MobileNavMenu: React.FC<{open: boolean}> = ({open}) => {
  return <MobileNavMenuContainer open={open}>Menu</MobileNavMenuContainer>;
};

export const MobileNavButton: React.FC = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <MobileNavButtonContainer
        open={menuIsOpen}
        onClick={() => setMenuIsOpen(!menuIsOpen)}>
        <MobileNavButtonBar
          style={{
            transform: menuIsOpen ? 'translate(0px,12px) rotate(45deg)' : null,
          }}
        />
        <MobileNavButtonBar style={{opacity: menuIsOpen ? 0 : 1}} />
        <MobileNavButtonBar
          style={{
            transform: menuIsOpen
              ? 'translate(0px,-12px) rotate(-45deg)'
              : null,
          }}
        />
      </MobileNavButtonContainer>
      <MobileNavMenu open={menuIsOpen} />
    </>
  );
};

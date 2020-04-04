import {Link} from 'gatsby';
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

const MobileNavButtonContainer = styled.div(({theme}) => ({
  borderRadius: theme.baseUnit / 2,
  backgroundColor: '#F0FFFA',
  padding: theme.baseUnit / 2,
}));

const MobileNavButtonBar = styled.div(({theme}) => ({
  width: theme.baseUnit * 4,
  height: theme.baseUnit / 2,
  margin: theme.baseUnit,
  borderRadius: theme.baseUnit / 2,
  backgroundColor: '#49E9B6',
}));

export const MobileNavButton: React.FC = () => {
  return (
    <MobileNavButtonContainer>
      <MobileNavButtonBar />
      <MobileNavButtonBar />
      <MobileNavButtonBar />
    </MobileNavButtonContainer>
  );
};

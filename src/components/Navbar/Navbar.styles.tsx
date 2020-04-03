import {Link} from 'gatsby';
import logo from '../../assets/logo_name.png';
import styled from '../../config/styled';

export const NavContainer = styled.nav(({theme}) => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  padding: theme.baseUnit * 1,
  maxWidth: theme.containerWidth,
}));

const LogoImg = styled.img({height: 44});

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

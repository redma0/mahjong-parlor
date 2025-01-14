// src/components/Header.tsx
import styled from 'styled-components';

const NavContainer = styled.header`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

export const Header = () => {
  return (
    <NavContainer>
      <Nav>
        <Logo src="/logo.png" alt="Mahjong Parlor" />
        <NavList>
          <li><NavLink href="#home">Home</NavLink></li>
          <li><NavLink href="#about">About</NavLink></li>
          <li><NavLink href="#reservations">Reservations</NavLink></li>
          <li><NavLink href="#rules">Rules</NavLink></li>
          <li><NavLink href="#events">Events</NavLink></li>
          <li><NavLink href="#contact">Contact</NavLink></li>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

import styled from 'styled-components';

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9));
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const CTAButton = styled.button`
  background-color: ${props => props.theme.colors.accent};
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props => props.theme.colors.accentDark};
  }
`;

export const Hero = () => {
  return (
    <HeroSection>
      <Title>Welcome to Mahjong Parlor</Title>
      <p>Experience the Ancient Game of Strategy in a Modern Setting</p>
      <CTAButton onClick={() => console.log('Booking clicked')}>
        Book a Table
      </CTAButton>
    </HeroSection>
  );
};
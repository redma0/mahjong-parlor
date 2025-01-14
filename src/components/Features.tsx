// src/components/Features.tsx
import styled from 'styled-components';

const FeaturesGrid = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  text-align: center;
`;

export const Features = () => {
  const features = [
    {
      title: 'Beginners Welcome',
      items: ['Intro classes available', 'Equipment provided', 'Friendly staff assistance']
    },
    {
      title: 'Regular Events',
      items: ['Weekly tournaments', 'Social gaming nights', 'Learning sessions']
    },
    {
      title: 'Traditional Experience',
      items: ['Authentic equipment', 'Peaceful atmosphere', 'Tea service available']
    }
  ];

  return (
    <FeaturesGrid>
      {features.map((feature, index) => (
        <FeatureCard key={index}>
          <h3>{feature.title}</h3>
          {feature.items.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </FeatureCard>
      ))}
    </FeaturesGrid>
  );
};
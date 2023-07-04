import styled from 'styled-components'
import { gray_500, secondary, tablet_size, yellow } from '../../styles/Tokens'

export const ErrorPageBox = styled.main`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  height: 100vh;

  @media (min-width: ${tablet_size}) {
    flex-direction: row;
    justify-content: space-evenly;
    gap: 0;

    height: 100vh;

    margin: 0;
  }

  picture {
    width: 60%;

    @media (min-width: ${tablet_size}) {
      width: auto;
    }
  }
`

export const ErrorPageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-size: 2.5rem;
    background-image: linear-gradient(90deg, ${secondary}, ${yellow});
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    color: ${gray_500};
  }

  @media (min-width: ${tablet_size}) {
    width: 40%;
    margin: 0;
  }
`

export const ErrorPageCTAs = styled.div`
  display: flex;
  gap: 2rem;
`

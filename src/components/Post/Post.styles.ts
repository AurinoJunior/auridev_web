import styled from 'styled-components'
import { gray_800, pink } from '../../styles/Tokens'

export const PostBox = styled.main`
  width: 70%;
  margin: 8rem auto 0;
`

export const PostTitle = styled.h1`
  font-size: 2.25rem;
  text-align: center;
  margin-bottom: 4rem;
`

export const PostSetInnerHtml = styled.div`
  h2 {
    margin: 2rem 0;
    font-size: 2rem;
  }

  p {
    margin: 1rem 0;
    text-align: justify;
    line-height: 1.5rem;

    a {
      color: ${pink};
      text-decoration: underline;

      &:hover {
        filter: brightness(0.5);
        transition: 0.2s;
      }
    }
  }

  pre {
    overflow-x: auto;
    tab-size: 2;
    line-height: 1.75rem;
    background-color: ${gray_800};
    border-radius: 1rem;
    padding: 1rem;

    & + pre {
      margin-top: 1rem;
    }

    code {
      overflow-x: scroll;
    }
  }
`
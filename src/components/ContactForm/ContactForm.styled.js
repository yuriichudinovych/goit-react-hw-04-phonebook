import styled from '@emotion/styled';

export const StyledContactForm = styled.form`
  padding: ${p => p.theme.space[4]}px 0 ${p => p.theme.space[4]}px 0;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    transform: translateY(50%);
    background-color: ${p => p.theme.colors.accent};
  }
  & label {
    display: block;
    width: 100%;
    margin-bottom: ${p => p.theme.space[4]}px;
  }

  & input {
    margin-top: ${p => p.theme.space[2]}px;
    box-sizing: border-box;
    width: 100%;
    display: block;
  }

  & input:focus,
  button:focus {
    outline-color: ${p => p.theme.colors.accent};
  }

  & button {
    padding: ${p => p.theme.space[2]}px;
    border: ${p => p.theme.borders.normal + p.theme.colors.black};
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    &:hover {
      background-color: ${p => p.theme.colors.accent};
      color: ${p => p.theme.colors.white};
      border-color: ${p => p.theme.colors.accent};
    }
  }
`;

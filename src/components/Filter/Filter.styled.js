import styled from '@emotion/styled';

export const StyledFilter = styled.label`
  display: block;
  width: 100%;
  margin-bottom: ${p => p.theme.space[4]}px;

  & input {
    margin-top: ${p => p.theme.space[2]}px;
    box-sizing: border-box;
    width: 100%;
    display: block;
  }

  & input:focus {
    outline-color: ${p => p.theme.colors.accent};
  }
`;

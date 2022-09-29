import styled from '@emotion/styled';

export const StyledContactList = styled.ul`
  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:last-child) {
      margin-bottom: ${p => p.theme.space[3]}px;
    }

    & button {
      padding: ${p => p.theme.space[2]}px;
      border: ${p => p.theme.borders.normal + p.theme.colors.black};
      border-radius: 5px;
      display: block;
      &:hover {
        background-color: ${p => p.theme.colors.accent};
        color: ${p => p.theme.colors.white};
        border-color: ${p => p.theme.colors.accent};
      }
    }
  }
`;

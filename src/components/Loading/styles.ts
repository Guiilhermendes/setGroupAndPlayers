import styled, { DefaultTheme } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;

    background-color: ${({ theme }: { theme: DefaultTheme}) => theme.COLORS.GRAY_600};
`;

// Esse 'attrs' é para acessar as propriedades visuais de um component nativo do react
export const LoadIndicator = styled.ActivityIndicator.attrs(({ theme }: { theme: DefaultTheme}) => ({
    color: theme.COLORS.GREEN_700
}))``;
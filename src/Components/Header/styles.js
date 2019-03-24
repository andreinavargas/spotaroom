import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 10vh;
    width: 100%;
    margin: 0px, 0px, 30px, 30px;
`

export const Title = styled.h2`
    color: black;
    padding-left: 20px;
    font-size: ${props => props.theme.sizes.L};
`
export const SectionContainer = styled.div`
    display: none;
    @media (min-width: 1281px) {
       display: inherit;
       padding: 20px;
    } 
`

export const Section = styled.a`
    padding: 20px;
    text-decoration: none;
    color: ${props => props.theme.colors.Black};
`
import styled from 'styled-components'

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    border: 1px solid black;
    min-height: 420px;
    @media (min-width: 1281px) {
        align-items:  flex-start;
        justify-content: space-between;
    } 
`

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1281px) {
        display: flex;
        width: 94vw;
        flex-direction: row;
        align-items: center;
        margin-top: 50px;
}
`

export const Image = styled.img`
    max-width: 300px;
    :hover {
        box-shadow: 5px 5px gray;
    }
`

export const Description = styled.div`
    max-width: 300px;
    text-align: left;
    @media (min-width: 1281px) {
        min-width: 900px;
        margin-left: 40px;
}
    
`

export const PriceContainer = styled.div`
    margin-bottom: 20px;
    display: flex;
    width: 100%;
    justify-content: flex-end;
`
export const ButtonContainer = styled.div`
    @media (min-width: 1281px) {
     display: flex;
     width: 100%;
     justify-content: flex-end;
     flex-direction: row;
     margin-top: 50px;
}

`
export const DetailButtonContainer = styled.div`
    display: none;
    @media (min-width: 1281px) {
        display: inline;
        margin-left: 20px;
}
`


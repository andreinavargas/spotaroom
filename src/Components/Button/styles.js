import styled from 'styled-components'

const color = props => {
  console.log(props)
  const {type, theme} = props
  switch (type) {
    case 'black':
    return `background-color: ${theme.colors.Black};
      color: ${theme.colors.CarrotOrange};
      padding: 10px;
      border-radius: 10px 10px 10px 10px;
    `
    case 'secundary':
      return `background-color: ${theme.colors.CarrotOrange};
        color: ${theme.colors.White};
        border-bottom: 5px solid ${theme.colors.RedStage};
        padding: 12px 60px;
      `
    case 'primary':
    default:
      return `background-color: ${theme.colors.Apple};
        color: ${theme.colors.White};
        border-bottom: 5px solid ${theme.colors.Jewel};
        padding: 12px 60px;
      `
  }
}

export const BasicButton = styled.button`
  && {
    font-size: ${props => props.theme.sizes.XS};
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: 5px;
    text-align: center;
    ${color};
  }
`

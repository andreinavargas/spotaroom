import styled from 'styled-components'

const color = props => {
  console.log(props)
  const {type, theme} = props
  switch (type) {
    case 'secundary':
      return `background-color: ${theme.colors.CarrotOrange};
        color: ${theme.colors.White};
        border-bottom: 3px solid ${theme.colors.RedStage};
      `
    case 'primary':
    default:
      return `background-color: ${theme.colors.Apple};
        color: ${theme.colors.White};
        border-bottom:: 3px solid ${theme.colors.Jewel};
      `
  }
}

export const BasicButton = styled.button`
  && {
    font-size: ${props => props.theme.sizes.XS};
    font-weight: ${props => props.theme.fontWeights.regular};
    line-height: ${props => props.theme.lineHeight.S};
    padding: 12px 60px;
    text-align: center;
    ${color};
  }
`

import styled from 'styled-components'

const StyledSpan = styled.span`
  color: blue;
  cursor: pointer;
`

function SelectableElement({ element, onSelectedElement, onHighlightedElement }) {
  return (
    <StyledSpan 
      onClick={() => onSelectedElement(element)} 
      onMouseOver={() => onHighlightedElement(element)}
      onMouseOut={() => onHighlightedElement(null)}
    >
      &lt;{element.tagName.toLowerCase()}&gt;
    </StyledSpan>
  )
}

export default SelectableElement
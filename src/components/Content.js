import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  .highlight {
    background-color: rgb(173, 219, 255, 0.8) !important;
    outline: 1px solid rgb(35, 159, 255) !important;
  }

  .selected {
    background-color: rgba(235, 198, 255, 0.8) !important;
    outline: 1px solid rgb(178, 35, 255) !important;
  }
`

function Content({ 
  html,
  selectedElement, 
  onSelectedElement,
  highlightedElement, 
  onHighlightedElement, 
}) {
  const elementRef = useRef()

  useEffect(() => {
    const element = elementRef.current

    const handleSelectElement = ({ target: element }) => {
      if (element === selectedElement) return;
      onSelectedElement(element)
    }

    const handleHighlightElement = ({ target: element }) => {
      if (element === highlightedElement) return;
      onHighlightedElement(element)
    }

    const handleRemoveHighlight = () => {
      onHighlightedElement(null)
    }

    if (element) {   
      element.addEventListener("click", handleSelectElement)
      element.addEventListener("mouseover", handleHighlightElement)
      element.addEventListener("mouseout", handleRemoveHighlight)

      if (!selectedElement) {
        onSelectedElement(element.querySelector("div > *"))
      }

      return () => {
        element.removeEventListener("click", handleSelectElement)
        element.removeEventListener("mouseover", handleHighlightElement)
        element.removeEventListener("mouseout", handleRemoveHighlight)
      }
    }
  }, [highlightedElement, html, selectedElement, onHighlightedElement, onSelectedElement])

  return (
    <StyledContainer ref={elementRef} id="container">
      <div dangerouslySetInnerHTML={{__html: html}} />
    </StyledContainer>
  )
}

export default Content
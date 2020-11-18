import {Controlled as CodeMirror} from 'react-codemirror2'
import styled from 'styled-components'
import { printElementName } from "../utils"
import AttributeList from './AttributeList'
import MethodList from './MethodList'
import PropertyList from './PropertyList'

const StyledElementName = styled.h1`
  .tag {
    color: blue
  }

  .id {
    color: purple
  }
`

const StyledCodeMirror = styled(CodeMirror)`
  .CodeMirror {
    height: auto;
  }
`

function Inspector({ 
  selectedElement, 
  onSelectedElement, 
  onHighlightedElement, 
  onUpdateSelectedElement,
  onUpdateSelectedElementStyle 
}) {
  if (!selectedElement) return null

  const title = printElementName(selectedElement)

  return (
    <div>
      <StyledElementName>
        Element:{" "}
        <span className="tag">{selectedElement.tagName.toLowerCase()}</span>
        <span className="id">{title}</span>
      </StyledElementName>
      <StyledCodeMirror 
        value={selectedElement.outerHTML}
        options={{
          mode: 'xml',
          htmlMode: true,
          theme: 'material',
          readOnly: true,
          lineWrapping: true
        }}
      />
      <AttributeList selectedElement={selectedElement} />
      <hr />
      <PropertyList 
        selectedElement={selectedElement}
        onHighlightedElement={onHighlightedElement}
        onSelectedElement={onSelectedElement}
        onUpdateSelectedElement={onUpdateSelectedElement}
        onUpdateSelectedElementStyle={onUpdateSelectedElementStyle}
      />
      <hr />
      <MethodList 
        selectedElement={selectedElement}
        onHighlightedElement={onHighlightedElement}
        onSelectedElement={onSelectedElement}
        onUpdateSelectedElement={onUpdateSelectedElement}
      />
    </div>
  )
}

export default Inspector
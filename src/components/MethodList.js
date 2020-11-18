import { useState } from 'react'
import styled from 'styled-components'
import { commonDOMMethods } from '../data'
import SelectableElement from './SelectableElement'

const StyledMethodList = styled.ul`
  list-style: none;
  padding: 0;

  a {
    font-size: 0.75em;
  }

  h3 {
    margin-bottom: 0.1rem;
  }

  p {
    margin-top: 0.25rem;
    color: #333;
  }
`

function MethodItem({ 
  element, 
  name, 
  args, 
  description, 
  mdn,
  onHighlightedElement,
  onSelectedElement,
  onUpdateSelectedElement 
}) {
  const argList = args.map(arg => arg.name).join(", ")

  const inputs = args.reduce((arr, arg) => {
    arr.push([arg.name, ""])
    return arr
  }, [])
  
  const [inputData, setInputData] = useState(inputs)

  const [methodResult, setMethodResult] = useState("run method to see return value")

  const inputValues = inputData.map(([, value]) => value)

  const preview = element.tagName.toLowerCase() + "." + name + "(" + inputValues.map(value => `"${value}"`).join(", ") + ")"

  const getResultPreview = () => {
    if (methodResult instanceof HTMLElement) {
      return <SelectableElement 
        element={methodResult} 
        onSelectedElement={onSelectedElement}
        onHighlightedElement={onHighlightedElement}
      />
    } else if (methodResult instanceof NodeList) {
      return Array.from(methodResult).map(el => (
        <SelectableElement 
          element={el} 
          onSelectedElement={onSelectedElement}
          onHighlightedElement={onHighlightedElement}
        />
      ))
    } else if (methodResult === undefined) {
      return "undefined"
    } else if (methodResult === null) {
      return "null"
    } else {
      return methodResult.toString()
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    const result = element[name](...inputValues)
    setMethodResult(result)
  }
  
  return (
    <li>
      <h3><em>Element.</em>{name}({argList}) <a href={mdn} target="_blank" rel="noreferrer">MDN</a></h3>
      <p>{description}</p>
      <form onSubmit={handleSubmit} style={{ marginLeft: "1rem" }}>
        <h4>Arguments</h4>
        {args.length === 0 
          ? <p>(none)</p>
          : args.map(arg => (
            <label key={arg.name}>
              {arg.name}{": "}
              <input type="text" value={inputData[arg.name]} onChange={({ target }) => {
                setInputData(inputs => 
                  inputs.map(input => 
                    input[0] === arg.name ? [arg.name, target.value] : input
                  )
                )
              }} />
            </label>
            ))
        }
        <h4>Preview</h4>
        <p>{preview}</p>
        <input type="submit" value="Run method" />
        <h4>Return Value</h4>
        <p>{getResultPreview()}</p>
      </form>
    </li>
  )
}

function MethodList({ 
  selectedElement,
  onSelectedElement,
  onHighlightedElement,
  onUpdateSelectedElement,
  onUpdateSelectedElementStyle
}) {

  const methodList = commonDOMMethods
    .map(method => {
      
      return (
        <MethodItem 
          key={method.name} 
          element={selectedElement}
          name={method.name}
          description={method.description}
          mdn={method.mdn}
          args={method.args}
          onHighlightedElement={onHighlightedElement}
          onSelectedElement={onSelectedElement}
          onUpdateSelectedElement={onUpdateSelectedElement}
        />
      )
    })

  return (
    <>
      <h2>Common Methods</h2>
      <StyledMethodList>
        {methodList}
      </StyledMethodList>
    </>
  )
}

export default MethodList
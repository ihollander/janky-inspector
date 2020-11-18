import styled from 'styled-components'
import { commonDOMProperties } from '../data'

const StyledPropertyList = styled.ul`
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

  .selectable {
    color: blue;
    cursor: pointer;
  }
`

function PropertyItem({ name, description, mdn, children }) {
  return (
    <li>
      <h3>{name} <a href={mdn} target="_blank" rel="noreferrer">MDN</a></h3>
      <p>{description}</p>
      <span>{name} = </span>{children}
    </li>
  )
}

function SelectableElement({ element, onSelectedElement, onHighlightedElement }) {
  return (
    <span 
      className="selectable"
      onClick={() => onSelectedElement(element)} 
      onMouseOver={() => onHighlightedElement(element)}
      onMouseOut={() => onHighlightedElement(null)}
    >
      &lt;{element.tagName.toLowerCase()}&gt;
    </span>
  )
}

function PropertyList({ 
  selectedElement,
  onSelectedElement,
  onHighlightedElement,
  onUpdateSelectedElement,
  onUpdateSelectedElementStyle
}) {

  const propertiesList = commonDOMProperties
    .filter(property => property.name in selectedElement)
    .map(property => {
      const value = selectedElement[property.name]
      let children;
      if (value instanceof HTMLElement) {
        // parentElement
        children = <SelectableElement 
          element={value} 
          onSelectedElement={onSelectedElement} 
          onHighlightedElement={onHighlightedElement} 
        />
      } else if (value instanceof HTMLCollection) {
        // children
        if (value.length) {
          children = Array.from(value).map((child, index) => (
            <SelectableElement 
              key={index}
              element={child}
              onSelectedElement={onSelectedElement} 
              onHighlightedElement={onHighlightedElement} 
            />
          ))
        } else {
          children = "[]"
        }
      } else if (value instanceof CSSStyleDeclaration) {
        // styles
        if (value.length) {
          let items = [];
          for (let item of value) {
            items.push(
              <li key={item}>
                <label>
                  {item}:{" "}
                  <input type="text" value={value[item]} onChange={({ target }) => {
                    onUpdateSelectedElementStyle(item, target.value)
                  }} />
                </label>
              </li>
            )
          }
          children = (
            <ul>{items}</ul>
          )
        } else {
          children = "{}"
        }
      } else if (value instanceof DOMStringMap) {
        // dataset
        const dataset = []
        for (let item in value) {
          dataset.push(`${item}: ${value[item]}`)
        }
        children = dataset.length ? dataset.join(", ") : "{}"
      } else {
        // string properties
        if (property.readOnly) {
          children = value
        } else {
          children = (
            <input type="text" value={value} onChange={({ target }) => {
              onUpdateSelectedElement(property.name, target.value)
            }} />
          )
        }
      }

      return (
        <PropertyItem 
          key={property.name} 
          name={property.name}
          description={property.description}
          mdn={property.mdn}
        >
          {children}
        </PropertyItem>
      )
    })

  return (
    <>
      <h2>Common Properties</h2>
      <StyledPropertyList>
        {propertiesList}
      </StyledPropertyList>
    </>
  )
}

export default PropertyList
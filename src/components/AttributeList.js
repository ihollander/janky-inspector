import styled from 'styled-components'

const StyledAttributeList = styled.ul`
  list-style: none;
  padding: 0;
  font-weight: bold;

  .name {
    color: blue;
  }

  .value {
    color: purple;
  }
`

function AttributeList({ selectedElement }) {
  return (
    <>
      <h2>Attributes</h2>
      <StyledAttributeList>
        {Array.from(selectedElement.attributes).map(({ name, value}) => (
          <li key={name}>
            <span className="name">{name}</span>=<span className="value">"{value}"</span>
          </li>
        ))}
      </StyledAttributeList>
    </>
  )
}

export default AttributeList
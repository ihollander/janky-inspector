import { useState } from 'react';
import styled from 'styled-components'
import Content from './Content'
import Editor from './Editor'
import Inspector from './Inspector'

const StyledMain = styled.main`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-areas: 
    "content inspector"
    "editor inspector"
  ;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  font-size: 16px;
`

const StyledContent = styled.div`
  grid-area: content;
  overflow: auto;
  padding: 1rem;

  > div {
    cursor: pointer;
  }
`

const StyledEditor = styled.div`
  grid-area: editor;
  background-color: azure;
  overflow: auto;

  .react-codemirror2 {
    height: 100%;
  }

  .CodeMirror {
    height: 100%;
  }
`

const StyledInspector = styled.div`
  grid-area: inspector;
  background-color: aliceblue;
  overflow-y: scroll;
  padding: 0 1rem;
`

const initialHTML = `<h1 id="welcome">Welcome to Janky Inspector</h1>
<p class="description">
  <em>
    A playground to learn about the DOM 
    and common methods for interacting with HTML Elements
  </em>
</p>
<p>
  <em>It's like a less powerful version of the Dev Tools!</em>
  🤠
</p>
<p>On this page, you'll find:</p>

<ul class="list">
  <li>
    📄 HTML Content (this part of the page)
  </li>
  <li>
    ➡️ An interactive Inspector tool where you can see common DOM properties and methods (try editing the text fields and running some methods)
  </li>
  <li>
   ⬇️ A text Editor where you can update the HTML displayed in the Content section (you can edit the existing HTML, or paste in some fresh content)
  </li>
</ul>

<p id="help" style="font-weight: bold; color: red">
  To get started, click this element it to show the details in the Inspector!
</p>
`

function App() {
  const [html, setHtml] = useState(initialHTML)

  const [editorHtml, setEditorHtml] = useState(initialHTML)

  const [isLiveEditor, setIsLiveEditor] = useState(false)
  
  const [highlightedElement, setHighlightedElement] = useState(null)

  // need an object in state because we want to force updates when making changes to the DOM element
  const [{selectedElement}, setSelectedElement] = useState({selectedElement: null})

  const handleSetHighlightedElement = nextElement => {
    const container = highlightedElement?.closest("#container")
    if (container) {
      container.querySelectorAll(".highlight").forEach(el => el.classList.remove("highlight"))
    }
    nextElement?.classList.add("highlight")
    setHighlightedElement(nextElement)
  }

  const handleSetSelectedElement = nextElement => {
    const container = selectedElement?.closest("#container")
    if (container) {
      container.querySelectorAll(".selected").forEach(el => el.classList.remove("selected"))
    }
    nextElement?.classList.add("selected")
    setSelectedElement(() => ({ selectedElement: nextElement }))
  }

  const handleUpdateSelectedElement = (name, value) => {
    selectedElement[name] = value
    const container = selectedElement.closest("#container > div")
    if (container) setEditorHtml(container.innerHTML)
    setSelectedElement(() => ({ selectedElement }))
  }

  const handleUpdateSelectedElementStyle = (style, value) => {
    selectedElement.style[style] = value
    const container = selectedElement.closest("#container > div")
    if (container) setEditorHtml(container.innerHTML)
    setSelectedElement(() => ({ selectedElement }))
  }

  return (
    <StyledMain>
      <StyledContent>
        <Content 
          html={html}
          selectedElement={selectedElement}
          onSelectedElement={handleSetSelectedElement}
          highlightedElement={highlightedElement}
          onHighlightedElement={handleSetHighlightedElement}
        />
      </StyledContent>
      <StyledEditor>
        <Editor 
          html={editorHtml} 
          setHtml={(html) => {
            setHtml(html)
            setEditorHtml(html)
            setSelectedElement({selectedElement: null})
          }}
          isLiveEditor={isLiveEditor}
          setIsLiveEditor={setIsLiveEditor} 
        />
      </StyledEditor>
      <StyledInspector>
        <Inspector 
          selectedElement={selectedElement} 
          onSelectedElement={handleSetSelectedElement}
          onHighlightedElement={handleSetHighlightedElement}
          onUpdateSelectedElement={handleUpdateSelectedElement}
          onUpdateSelectedElementStyle={handleUpdateSelectedElementStyle}
        />
      </StyledInspector>
    </StyledMain>
  )
}

export default App

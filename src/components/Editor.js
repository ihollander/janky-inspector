import {Controlled as CodeMirror} from 'react-codemirror2'

function Editor({ 
  html, 
  setHtml,
  isLiveEditor,
  setIsLiveEditor 
}) {
  return (
    <div 
      onMouseEnter={() => setIsLiveEditor(true)} 
      onMouseLeave={() => setIsLiveEditor(false)}
      style={{ height: "100%" }}
    >
      <CodeMirror 
        value={html}
        onBeforeChange={(editor, data, value) => {
          if (isLiveEditor) {
            setHtml(value)
          }
        }}
        options={{
          mode: 'xml',
          htmlMode: true,
          theme: 'material'
        }}
      />
    </div>
  )
}

export default Editor
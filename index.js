const defaultContent = `
![Dwinatech Logo](https://res.cloudinary.com/dxnn5sbsz/image/upload/v1639276534/venom_ls49ir.jpg)

# Hello, 
## You'r welcom at
### DwinaTech Channel


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`
- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


**Some bold text**
> Block Quot

1. First list item
2. Second list item
`

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor =({content, handleTextareaChange})=><textarea value={content} onChange={handleTextareaChange} id="editor"/>

const Previewer = ({ content }) =>{
  return(
    <div id="preview" dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer })
    }}/>
  )
  }

const App = () =>{
  
  const [content, setContent] = React.useState(defaultContent)
  
  const handleTextareaChange = (event) =>{
    setContent(event.target.value)
  }
  
  return (
    <div className="main">

      <div className='contenedor100'>
      <div className='titulo'>
      <h4>Editor</h4>
      </div>
      </div>
      <div className='contenedor100'>      
        <Editor content={content} handleTextareaChange={handleTextareaChange}/>
      </div>
      <div className='contenedor100'>
      <div className='titulo titulo1'>
      <h4>Previewer</h4>
      </div>
      </div>
      <div className='contenedor100'>
      <Previewer content={content}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#app'))
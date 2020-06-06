import React from 'react';
import './Editor.css';
import Preview, {toBeLoaded} from './Preview.js';

class Editor extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editorText: toBeLoaded,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) =>{
    this.setState({editorText: event.target.value});
  }

  render(){
    return(
      <div id = 'wrapper'>
        <h1 id='main-heading'>Simple Markdown Previewer</h1>
      <div id= 'headers'>
        <h3 id = 'preview-heading'>Preview Section</h3>
        <h3 id = 'editor-heading'>Editor Section</h3>
      </div>
        <div id = 'preview-col'>
          <Preview text={this.state.editorText}/>
        </div>
        <div id = 'editor-col'>
          <textarea id='editor' onChange= {this.handleChange} value={this.state.editorText}>
          </textarea>
        </div>

      </div>
    )
  }
}

export default Editor;
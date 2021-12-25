import './App.css'
import axios from 'axios';


function url_fetch(e) {
	e.preventDefault();
	const data = {
			   "code":"print('hello world')",
			   "language":"python",
			   "input":""
			   };
	axios.post("https://codexweb.netlify.app/.netlify/functions/enforceCode",data)
	
}

function CodeArea() {
	return (
	  <>
	  	<div className="code">
		<textarea className="code_area" placeholder="Start Coding here..." rows="4" cols="50"/>
		<div className = "UnderBar">
			<form onSubmit = {url_fetch}>
				<button>Run Code</button>
				</form>
		</div>
		</div>
	  </>
	);
  }
  export default CodeArea;
  
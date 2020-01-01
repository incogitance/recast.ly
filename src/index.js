// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';
console.log(exampleVideoData);

ReactDOM.render(<App />, document.getElementById('app'));

//ReactDOM.render(<Search />, document.getElementById('search'));
//ReactDOM.render(<VideoList />, document.getElementById('videolist'));
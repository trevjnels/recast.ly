import exampleVideoData from './data/exampleVideoData.js';
// import ReactDom from 'React';
import App from './components/App.js';

ReactDOM.render(<App  data={exampleVideoData}/>, document.getElementById('app'));

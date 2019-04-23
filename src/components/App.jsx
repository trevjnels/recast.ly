import exampleVideoData from '/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: exampleVideoData[0]
    };
    this.onListItemClick = this.onListItemClick.bind(this);
  }

  onListItemClick(videoObj) {
    this.setState(state => ({
      currentVideo: videoObj,
    }));
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={exampleVideoData} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos={exampleVideoData} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

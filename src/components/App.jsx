import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '/compiled/config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.data[0]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClick(video) {
    this.setState({video});
  }
  
  handleSearch(string = 'corgis') {
    // console.log(string);
    console.log('HELLO')
    // searchYouTube({query, key: YOUTUBE_API_KEY, max: 5}, function(data) {
    //   console.log(JSON.stringify(data));
    // });
  }

 
  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5>Search Youtube<Search search={this.handleSearch}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.video} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5>Video List Entries<VideoList videos={this.props.data} click={this.handleClick} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

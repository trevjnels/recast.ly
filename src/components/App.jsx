var stockObject =  {
  "kind": "youtube#searchResult",
  "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/nTC2C4oeXBfaOxEDQ-v2h4FXvMw\"",
  "id": {
    "kind": "youtube#video",
    "videoId": "rGy6tu6716w"
  },
  "snippet": {
    "publishedAt": "2013-11-26T22:26:39.000Z",
    "channelId": "UCO5trjdzeCAe-E29CqHBeBQ",
    "title": "ULTIMATE CORGI COMPILATION 2013 (cute and funny!)",
    "description": "YOU HAVE TO LISTEN TO THIS: https://open.spotify.com/track/3c95LuYRNnhFBm9FzDRETW We all love this cute little bastards, especially the puppy ones!",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/rGy6tu6716w/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/rGy6tu6716w/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/rGy6tu6716w/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "BestAnimalCompilations",
    "liveBroadcastContent": "none"
  }
}



import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '/compiled/config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: stockObject,
      videos: this.props.data
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleClick(video) {
    this.setState({video});
  }
  
  handleSearch(string) {
    searchYouTube({query: string, max:5, key: YOUTUBE_API_KEY }, data => {
      this.setState({
        videos: data.items
      })
    })
    console.log('data.items')
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5>Search Youtube<Search search={this.handleSearch} /></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.video} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5>Video List Entries<VideoList videos={this.state.videos} click={this.handleClick} /></h5></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

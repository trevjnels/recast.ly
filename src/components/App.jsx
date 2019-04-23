
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: this.props.data[0]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(video) {
    this.setState({video})
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><VideoPlayer video={this.state.video} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><VideoList videos={this.props.data} click={this.handleClick} /></h5></div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

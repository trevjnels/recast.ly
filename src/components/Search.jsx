import App from "./App.js"
import YOUTUBE_API_KEY from '/compiled/config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';


class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: "",
      search: props.search
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({value: event.target.value})
    this.state.search(this.state.value)
  }
  
  render() {
    return(
      <div className="search-bar form-inline">
        <input className="form-control" type="text" 
          value={this.state.value} onChange={ (event) => this.handleSearch(event)}/>
        <button className="btn hidden-sm-down"  >
          <span className="glyphicon glyphicon-search" /> 
        </button>
      </div>
    )
  }
}

// onClick={function(){props.search(props.value)}}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//event.target.value
//makestateful state.input = inputvalue of searchbar
export default Search;

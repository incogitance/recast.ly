import searchYouTube from '../lib/searchYouTube.js'
//searchYouTube.loadClient();


class Search extends React.Component {

  constructor(props) {

    super(props);

    this.state = {

    };
    this.query = this.query.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    console.log(this.state);
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name;
    this.setState({
      [name]: value
    })

  }

  query() {
    console.log('this.state: ', this.state);
    searchYouTube(this.state, this.props.setVideos);
  };


  render() {

    return (

      <div className="search-bar form-inline">
        <input className="form-control" type="text" name='query' value={this.state.query} onChange={this.handleInputChange} onSubmit={this.query}/>
        <button className="btn hidden-sm-down" onClick={this.query}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>



    )
  }
}

// var Search = (props) => (
//   <div className="search-bar form-inline">
//     <input className="form-control" type="text" />
//     <button className="btn hidden-sm-down" onClick={() => { searchYouTube({}, props.setVideos) }}>
//       <span className="glyphicon glyphicon-search"></span>
//     </button>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

export default Search;

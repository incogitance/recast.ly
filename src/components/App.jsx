import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      video: exampleVideoData[0],
      videos: exampleVideoData
    }
    this.setVideo = this.setVideo.bind(this)
    this.setVideos = this.setVideos.bind(this)
    searchYouTube({query: 'cats'}, this.setVideos)
  }
  setVideo (video) {
    this.setState({
      video: video
    });
  }
  setVideos (videos) {
    this.setVideo(videos[0]);
    this.setState({
      videos: videos
    });
  }
  render () {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div id='search'><h5><em>search</em><Search setVideos={this.setVideos}/></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em><VideoPlayer video={this.state.video} /></h5></div>
          </div>
          <div className="col-md-5">
            <div><h5><em>VideoList</em><VideoList videos={this.state.videos} setVideo={this.setVideo}/></h5></div>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

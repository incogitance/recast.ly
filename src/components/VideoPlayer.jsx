// var currentVideo = {};
// var setVideo = function (video) {
//   currentVideo = {
//     videoId: video.videoId,
//     title: video.title,
//     description: video.description,
//   };
//   let url = "https://www.youtube.com/embed/";
//   let url2 = "?autoplay=1";
//   currentVideo.videoURL = url + currentVideo.videoId + url2;
//   VideoPlayer(currentVideo);
// };

class VideoPlayer extends React.Component {
  constructor(props) {


    super(props);
  }


  render () {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src='https://www.youtube.com/embed/4ZAEBxGipoA?autoplay=1' allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>Title</h3>
          <div>Description</div>
        </div>
      </div>
    );
  }

}

// {currentVideo.videoURL}

// var VideoPlayer = (props) => (
//   <div className="video-player">
//     <div className="embed-responsive embed-responsive-16by9">
//       <iframe className="embed-responsive-item" src='https://www.youtube.com/embed/4ZAEBxGipoA?autoplay=1' allowFullScreen></iframe>
//     </div>
//     <div className="video-player-details">
//       <h3>Title</h3>
//       <div>Description</div>
//     </div>
//   </div>
// );

// {props.video.id.videoId}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoPlayer.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;

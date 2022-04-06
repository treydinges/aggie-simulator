import React from 'react';

class Option extends React.Component {
  onTrigger = (next) => {
    this.props.parentCallback(next);
  };

  render() {
    return (
      <div>
        <div className="overlay">
          <h2>{this.props.item.label}</h2>
        </div>

        <iframe
          className="video"
          src={"https://www.youtube.com/embed/" + this.props.item.video_id + "?autoplay=1&playlist=" + this.props.item.video_id + "&loop=1&controls=0"}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        >
        </iframe>

        <br></br>
        <div className="options">
          {this.props.item.options.map((children, index) =>
            <button
              key={index}
              onClick={() => this.onTrigger(children.next)}>{children.text}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Option;

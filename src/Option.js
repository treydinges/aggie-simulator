import React from 'react';

class Option extends React.Component {
  onTrigger = (next) => {
    this.props.parentCallback(next);
  };

  render() {
    return (
      <div>
        {this.props.item.label}
        <br></br>

        <iframe
          src={"https://www.youtube.com/embed/" + this.props.item.video_id + "?autoplay=1&playlist=" + this.props.item.video_id + "&loop=1"}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />

        <br></br>
        {this.props.item.options.map((children, index) =>
          <button key={this.props.item.id + index} onClick={() => this.onTrigger(children.next)}>{children.text}</button>
        )}
      </div>
    );
  }
}

export default Option;

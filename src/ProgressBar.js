import React from 'react';

class ProgressBar extends React.Component {
  render() {
    return (
      <div class="animated-progress progress">
        <span style={{ width: ((this.props.hours > 90 ? 100 : this.props.hours / 90 * 100)) + '%'}}>{this.props.hours > 90 ? 90 : this.props.hours} Hours</span>
      </div>
    )
  }
}

export default ProgressBar;

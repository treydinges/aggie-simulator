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
        {this.props.item.options.map((children) =>
          <button onClick={() => this.onTrigger(children.next)}>{children.text}</button>
        )}
      </div>
    );
  }
}

export default Option;

import React from 'react';

const refreshPage = () => {
  window.location.reload();
}

class LoseScreen extends React.Component {

  render() {
    return (
      <div className='whiteText'>
        <h1>Bummer, you ended with {this.props.finalHours} hours!</h1>
        <h1>You LOSE!</h1>
        <button onClick={refreshPage}>Try again?</button>
      </div>
    )
  }
}

export default LoseScreen;

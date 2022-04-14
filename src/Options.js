import React from 'react';
import Option from './Option';
import LoseScreen from './LoseScreen'
import WinScreen from './WinScreen';

class Options extends React.Component {
  data = this.props.options_data;

  state = {
    idx: 0,
    hours: 0,
  }

  handleCallback = (nextIdx) =>{
    this.setState({idx: nextIdx,
                   hours: nextIdx === -1 ? this.state.hours : this.state.hours + this.data[nextIdx].hours})
  }

  render() {
    const {idx} = this.state;
    return(
      <div>
        {
          this.state.idx === -1 ?
            <LoseScreen></LoseScreen>
            :
            this.state.hours >= 90 ?
            <WinScreen></WinScreen>
            :
            <Option item={this.data[idx]} parentCallback={this.handleCallback} hours={this.state.hours}/>
        }
      </div>
    );
  }
}

export default Options;

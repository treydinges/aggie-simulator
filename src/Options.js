import React from 'react';
import Option from './Option';

class Options extends React.Component {
    data = this.props.options_data;

    state = {
      idx: 0,
    }

    handleCallback = (childData) =>{
        this.setState({idx: childData})
    }

    render() {
        const {idx} = this.state;
        return(
           <div>
             <Option item={this.data[idx]} parentCallback={this.handleCallback}/>
           </div>
        );
    }
}

export default Options;

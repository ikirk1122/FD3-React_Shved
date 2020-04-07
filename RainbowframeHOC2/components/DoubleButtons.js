import React from 'react';
import PropTypes from 'prop-types';



class DoubleButtons extends React.Component {

  static propTypes = {   
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired
  }

  state = {
    caption1: this.props.caption1,
    caption2: this.props.caption2
  }

  componentWillReceiveProps(newProps){ 
    this.setState({caption1: newProps.caption1});
    this.setState({caption2: newProps.caption2});
    }

   press1 = () =>{ this.props.cbPressed(1)
  } 
   press2 = () =>{ this.props.cbPressed(2)
  } 

    render() {
      return (
        <div>
            <input type="button" onClick={this.press1} value={this.state.caption1}></input>
              {this.props.children}
                <input type="button" onClick={this.press2} value={this.state.caption2}></input>
        </div>
      ); 
    }

}

export default DoubleButtons ;

import React from 'react';
import PropTypes from 'prop-types';

class RainbowFrame extends React.Component {

  static propTypes = {
    colors: PropTypes.array.isRequired,
  };

//вариант с рекурсией с сохранением порядка цветов

  render() {
    if (this.props.colors.length==0)
    return this.props.children
    else return<div style={{border:"solid 4px "+this.props.colors[this.props.colors.length-1], padding:"5px"}}>
    <RainbowFrame colors={this.props.colors.slice(0,this.props.colors.length-1)}>
    {this.props.children}
    </RainbowFrame>
    </div>
  }

//вариант с циклом

/*
  render() {
    let output=this.props.children;
    this.props.colors.forEach(v =>
      output=<div style={{border:"solid 4px "+v, padding:"5px"}}>{output}</div>
    );
    return (
     output
     );
  }
*/
}

export default RainbowFrame;

import React from 'react';
import PropTypes from 'prop-types';

class Br2jsx extends React.PureComponent {

  static propTypes = {
    text: PropTypes.string.isRequired,
  };



  render() {
let final=[];
  let temp=this.props.text.split(/<br\s*\/?>/i);//regular expression
    temp.forEach(fe); 
function fe (v,i,a) {
  let br=<br key={i}></br>;
  if(i!=0) // или if(i) так как i=0 будет falsy
  final.push(br);
  final.push(v)
}
  
    return (final)
    
  }




}

export default Br2jsx;

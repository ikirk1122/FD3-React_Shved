"use strict";


import React from 'react';
import PropTypes from 'prop-types';
import './ishop.css';

class AddsPannel extends React.Component
{

  static propTypes = {
  
  };


  state = {
        good: this.props.good,
        
        workmode: this.props.workmode,
        checked: this.props.checked,
        textChangeAdd: null,
        priceChangeAdd: null,
        countChangeAdd: null,
        sourceChangeAdd: null,
        textChangeEdd: null,
        priceChangeEdd: null,
        countChangeEdd: null,
        sourceChangeEdd: null,
        firstChange: this.props.firstChange,
        kkey: 10000000,
  }
  
  componentWillReceiveProps(newProps){  

  this.setState({good: newProps.good});
  this.setState({checked: newProps.checked});
  this.setState({workmode: newProps.workmode});
  
  this.setState({firstChange: newProps.firstChange});
  if (newProps.good!=this.state.good) this.setState({kkey: this.state.kkey+1});
  }

forInCycle = (hash) =>{
  let arr=[];
for (var i in hash){
arr.push(hash.i)
} return arr.length
}

changeVolume = {
textChangeEdd: null,
countChangeEdd: null,
sourceChangeEdd: null,
priceChangeEdd: null
};

textChange = (EO) => { 
  this.setState({textChangeAdd:EO.target.value });

}
textChangeEd = (EO) => { 
 this.changeVolume.textChangeEdd=EO.target.value;
  this.firstChange();

}
priceChange = (EO) => { 
  this.setState({priceChangeAdd:EO.target.value });
;
}
priceChangeEd = (EO) => { 
 this.changeVolume.priceChangeEdd=EO.target.value;
  this.firstChange();

}
countChange = (EO) => { 
  this.setState({countChangeAdd:EO.target.value });

}
countChangeEd = (EO) => { 
  this.changeVolume.countChangeEdd=EO.target.value;
  this.firstChange();

}
sourceChange = (EO) => { 
  this.setState({sourceChangeAdd:EO.target.value });

}
sourceChangeEd = (EO) => { 
  this.changeVolume.sourceChangeEdd=EO.target.value;
  this.firstChange();

}
firstChange = () =>{

    if (this.state.firstChange==false) {
      
      this.props.cbFirstchange();

  if (this.changeVolume.textChangeEdd==null) 
  this.changeVolume.textChangeEdd=this.state.good.text;

  if (this.changeVolume.sourceChangeEdd==null) 
  this.changeVolume.sourceChangeEdd=this.state.good.source;

  if ( this.changeVolume.priceChangeEdd==null) 
  this.changeVolume.priceChangeEdd=this.state.good.price;

  if (this.changeVolume.countChangeEdd==null) 
  this.changeVolume.countChangeEdd=this.state.good.count;
}


}

cancel = (EO) => { 

  this.changeVolume.textChangeEdd=null 
  this.changeVolume.sourceChangeEdd=null;
  this.changeVolume.priceChangeEdd=null;
  this.changeVolume.countChangeEdd=null;
  this.props.cbCancel(EO);
}

add = () => { 
  
  this.props.cbAdd(
    this.state.textChangeAdd,
    this.state.priceChangeAdd,
    this.state.countChangeAdd,
    this.state.sourceChangeAdd,
  );
    this.setState({textChangeAdd: null,priceChangeAdd: null,countChangeAdd: null,sourceChangeAdd: null});
}

edd = () => { 
 let text=this.changeVolume.textChangeEdd;
 let price=this.changeVolume.priceChangeEdd;
 let count=this.changeVolume.countChangeEdd;
 let source=this.changeVolume.sourceChangeEdd;
  if (text==null) {text=this.state.good.text};
  if (price==null) {price=this.state.good.price};
  if (count==null) {count=this.state.good.count};
  if (source==null) {source=this.state.good.source};
  
  this.props.cbEdd(
    text,
    price,
    count,
    source,
    this.state.good.code
    );
    this.setState({textChangeEdd: null,priceChangeEdd: null,countChangeEdd: null,sourceChangeEdd: null});
}

    render () {




      return(<div className='addsPannel'>
      fsfsdf
         
                  </div>    )//variable 
    }  
  }

  export default AddsPannel;

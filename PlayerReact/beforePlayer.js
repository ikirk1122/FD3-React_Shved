import React from 'react';
import Player from './source/player';


class BeforePlayer extends React.PureComponent {
          
  render() {
    let info=(this.props.match.params.parameter); let workmode=1; let search=false;
   if (info==":songs") workmode=1;
   if (info==":mysongs") workmode=2;
   if (info==":search") search=true;
   if (info==":artists") workmode=0;
   if (info==":main") workmode=10;

    return (
      <Player
        workmode={workmode}
        search={search}
        skyProps={this.props.match.params.parameter}
      />
    );
    
  }

}
    
export default BeforePlayer;
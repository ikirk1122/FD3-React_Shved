import React from 'react';
import { withRainbowFramesHOC} from './withRainbowFramesHOC';
import DoubleButtons from './DoubleButtons';

class RainbowFrame extends React.Component {

  render() {
   let colors=['red','orange','yellow','green','#00bfff','blue','purple'];
   let FramedDoubleButtons=withRainbowFramesHOC(colors)(DoubleButtons);

    return (
  <div>
      <DoubleButtons 
        key={1}
          caption1={"однажды"} 
            caption2={"пору"}
             cbPressed={ value => alert (value) }> в студеную зимнюю </DoubleButtons> 

        <FramedDoubleButtons 
          key={2}
            caption1={"я из лесу"} 
              caption2={"мороз"} 
                cbPressed={ value => alert (value) }> вышел, был сильный </FramedDoubleButtons>
  </div>
          );
         }

}

export default RainbowFrame ;

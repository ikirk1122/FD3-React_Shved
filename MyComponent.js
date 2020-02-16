var MyComponent = React.createClass({

    displayName: 'MyComponent',
  
    render: function(){
  
      return React.DOM.div( {className:'MyComponentFrame'}, 
        React.DOM.h1( {className:'MyComponentH1'}, "Всем привет!" ),
        React.DOM.div( {className:'MyComponentText'}, "Начинаем изучение React!" ),
      );
    },
  
  });
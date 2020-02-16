var VotesBlock = React.createClass({

    displayName: 'VotesBlock',
  
    getDefaultProps: function() {
      return { shop: "Просто магазин" }
    },
  
    render: function() {
  
      var answersCode=[];
      for ( var a=0; a<this.props.goods.length; a++ ) {
        var answer=this.props.goods[a];
        var answerCode=        
          React.DOM.div({key:answer.code,className:'Answer'},
            React.DOM.span({className:'Count'},answer.count),
            React.DOM.span({className:'Text'},answer.text),
          );
        answersCode.push(answerCode);
      }
      return React.DOM.div( {className:'VotesBlock'}, 
        React.DOM.div( {className:'Question'}, this.props.shop ),
        React.DOM.div( {className:'Answers'}, answersCode ),
      );
    },
  
  });
var IShop = React.createClass({

    displayName: 'IShop',
  
    getDefaultProps: function() {
      return { shop: "Просто магазин" }
    },
  
    render: function() {
  
        var listFinal=[];
        var infosFinal=[];
        

this.props.goods.forEach(FE);
this.props.info.forEach(FE2);

  function FE (v,i,a)  {
        let temp=a[i];
        let temp2=        
          React.DOM.div({key:temp.code,className:'List'},
          React.DOM.div({className:'Text'},temp.text),
          React.DOM.div({className:'Prices'},temp.price),
            React.DOM.div({className:'Count'},temp.count),
            
            React.DOM.a({href:temp.source, target:"_b",className:'Imga'},temp.source),
          );
          listFinal.push(temp2);
};

function FE2 (v,i,a)  {
    let temp=a[i];
    let temp2=        
        React.DOM.div({key:temp.uniquecode,className:'List'},
        React.DOM.div({className:'Text'},temp.text),
        React.DOM.div({className:'Text'},temp.price),
        React.DOM.div({className:'Text'},temp.count),
        React.DOM.div({className:'Text'},temp.source),
        
              );
              infosFinal.push(temp2);
};

     

      return React.DOM.div( {className:'iShop'},
        
        React.DOM.div( {className:'ShopName'}, this.props.shop ),
       // React.DOM.div( {className:'Question'}, this.props.info ),
        React.DOM.div( {className:'Lists'},infosFinal ), 
        React.DOM.div( {className:'Lists'},listFinal ),
      );
    },
  
  });
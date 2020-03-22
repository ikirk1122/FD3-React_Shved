var IGoods = React.createClass({

    displayName: 'IGoods',

    propTypes: {
      goods: React.PropTypes.array.isRequired,
      info: React.PropTypes.array.isRequired,
      cbcheckedChanged: React.PropTypes.func.isRequired,
      cbdeletedChanged: React.PropTypes.func.isRequired,
    },
  
    getDefaultProps: function() {
      return { shop: "Какие-то товары" }
    },

    getInitialState: function () {
      return {
        goods: this.props.goods,
        info: this.props.info,
         checked: this.props.checked,
      };
    },

    componentWillReceiveProps: function (nextProps) {
     this.setState( {goods: nextProps.goods}),
      this.setState( {info: nextProps.info}),
      this.setState( {checked: nextProps.checked})
  },


  checked: function(EO) { 
  this.props.cbcheckedChanged(EO.target.getAttribute("data"));
  },

  deleted: function(EO) { 
    confirm("Delete Item???")?this.props.cbdeletedChanged(EO.target.getAttribute("data")):null;
  },
 
    render: function() {
  
const classs = "List" + ' ' + "Blue";
var items=this.state.goods.map( v =>
React.DOM.div({key:v.code,className:((this.props.checked==v.code)?classs:'List'), data:v.code,onClick:this.checked},
React.DOM.div({className:'Text',data:v.code},v.text),
React.DOM.div({className:'Prices',data:v.code},v.price),
  React.DOM.div({className:'Count',data:v.code},v.count),
  React.DOM.a({className:'Prices', href:v.source, target:"_b",className:'Imga'},v.source),
  React.DOM.input({className:'Count',
  type:'button',defaultValue:"DELETE",data:v.code,
  onClick: this.deleted}),                 
)
);

var infosFinal=this.state.info.map( v=>
  React.DOM.div({key:v.uniquecode,className:'List'},
  React.DOM.div({className:'Text'},v.text),
  React.DOM.div({className:'Text'},v.price),
  React.DOM.div({className:'Text'},v.count),    
  React.DOM.div({className:'Text'},v.source),
  React.DOM.div({className:'Text'},v.control),
        )
);
 

      return React.DOM.div( {className: null},
        React.DOM.div( {className:'Lists'},infosFinal ), 
        React.DOM.div( {className:'Lists', data: 'sss'},items ),
      );
    },
  
  });

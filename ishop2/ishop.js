var IShop = React.createClass({

    displayName: 'IShop',
  
    getDefaultProps: function() {
      return { shop: "Какой-то магазин" }     
    },
  
    getInitialState: function () {
      return {
        checked: 0,
        goods: this.props.goods,
        info: this.props.info,
      };
    },
    checkedChanged: function(x) {  
     this.setState( {checked:x} );
    },

    deletedChanged: function(xx) { 
function ff (v,i,a){
return a[i].code!=xx;}
this.setState((state, props) => ({goods: this.state.goods.filter(ff)}));
     },



    render: function() {
      
      return React.DOM.div( {className:'iShop'},
       
        React.DOM.div( {className:'ShopName'}, this.props.shop ),
       React.createElement(IGoods, {className:'Lists', 
         goods: this.state.goods,
         info: this.state.info,
         checked: this.state.checked,
         cbcheckedChanged:this.checkedChanged,
         cbdeletedChanged:this.deletedChanged }
),
   );
      },
  
  });

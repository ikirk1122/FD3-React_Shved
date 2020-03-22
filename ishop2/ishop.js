var IShop = React.createClass({

    displayName: 'IShop',
  
    getDefaultProps: function() {
      return { shop: "Какой-то магазин" }     
    },
  
    getInitialState: function () {
      return {
        deleted: {0:true},
        checked: 0,
      };
    },
    checkedChanged: function(x) {  
     this.setState( {checked:x} );
    },

    deletedChanged: function(xx) { 
  let a=this.state.deleted; a[xx]=true;
  this.setState( {deleted:a} );
     },



    render: function() {
      
      return React.DOM.div( {className:'iShop'},
       
        React.DOM.div( {className:'ShopName'}, this.props.shop ),
       React.createElement(IGoods, {className:'Lists', 
         goods: this.props.goods,
         info: this.props.info,deleted: this.state.deleted,
         checked: this.state.checked,
         cbcheckedChanged:this.checkedChanged,
         cbdeletedChanged:this.deletedChanged }
),
   );
      },
  
  });


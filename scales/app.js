var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        console.log("scale of " + this.name + " is " + this.scale + " gramm"); //not mandatory
        return this.scale;
    };
    Product.prototype.getName = function () {
        console.log("name of product is " + this.name); //not mandatory
        return this.name;
    };
    return Product;
}());
;
var Banana = /** @class */ (function (_super) {
    __extends(Banana, _super);
    function Banana(_scale) {
        return _super.call(this, ("banana №" + (Math.random() * 100).toFixed(0)), _scale) || this;
    }
    return Banana;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(_scale) {
        return _super.call(this, ("apple №" + (Math.random() * 100).toFixed(0)), _scale) || this;
    }
    return Apple;
}(Product));
;
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (prod) {
        this.products.push(prod);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var answer = 0;
        for (var i = 0; i < this.products.length; i++) {
            answer = answer + this.products[i].scale;
        }
        console.log(answer); //not mandatory
        return answer;
    };
    ;
    Scales.prototype.getNameList = function () {
        var answer = [];
        for (var i = 0; i < this.products.length; i++) {
            answer.push(this.products[i].name);
        }
        console.log(answer); //not mandatory
        return answer;
    };
    return Scales;
}());
;
/*-----------------tests------------------*/
var scale1 = new Scales();
var banana1 = new Banana(25);
var banana2 = new Banana(35);
var apple1 = new Apple(70);
var apple2 = new Apple(50);
scale1.add(banana1);
scale1.add(apple1);
scale1.add(banana2);
scale1.add(apple2);
scale1.getNameList(); //array of 4 Obj
scale1.getSumScale(); //180
banana1.getName();
banana1.getScale(); //25
apple1.getName();
apple1.getScale(); //70
//# sourceMappingURL=app.js.map
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
    return Product;
}());
var Banana = /** @class */ (function (_super) {
    __extends(Banana, _super);
    //scale:number;
    //name:string;
    function Banana() {
        return _super.call(this, ("banana №" + (Math.random() * 100).toFixed(0)), 25) || this;
        // this.name=("banana №"+(Math.random()*100).toFixed(0));
        // this.scale=25;
    }
    Banana.prototype.getScale = function () {
        console.log("scale of " + this.name + " is " + this.scale + " gramm"); //not mandatory
        return this.scale;
    };
    Banana.prototype.getName = function () {
        console.log("name of product is " + this.name); //not mandatory
        return this.name;
    };
    return Banana;
}(Product));
var Apple = /** @class */ (function () {
    function Apple() {
        //super(("apple №"+(Math.random()*100).toFixed(0)), 35);
        this.name = ("apple №" + (Math.random() * 100).toFixed(0));
        this.scale = 35;
    }
    Apple.prototype.getScale = function () {
        console.log("scale of " + this.name + " is " + this.scale + " gramm"); //not mandatory
        return this.scale;
    };
    Apple.prototype.getName = function () {
        console.log("name of product is " + this.name); //not mandatory
        return this.name;
    };
    return Apple;
}());
;
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = []; //массив объектов реализующих указанный интерфейс IScalable
    }
    Scales.prototype.add = function (prod) {
        this.products.push(prod);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var answer = 0;
        for (var i = 0; i < this.products.length; i++) {
            answer = answer + this.products[i].getScale();
        } //call method not property
        console.log(answer); //not mandatory
        return answer;
    };
    ;
    Scales.prototype.getNameList = function () {
        var answer = [];
        for (var i = 0; i < this.products.length; i++) {
            answer.push(this.products[i].getName());
        } //call method not property
        console.log(answer); //not mandatory
        return answer;
    };
    return Scales;
}());
;
/*-----------------tests------------------*/
var scale1 = new Scales();
var banana1 = new Banana();
var banana2 = new Banana();
var apple1 = new Apple();
var apple2 = new Apple();
scale1.add(banana1);
scale1.add(apple1);
scale1.add(banana2);
scale1.add(apple2);
scale1.getNameList(); //array of 4 Obj
scale1.getSumScale(); //120
banana1.getName();
banana1.getScale(); //25
apple1.getName();
apple1.getScale(); //35
//# sourceMappingURL=app.js.map
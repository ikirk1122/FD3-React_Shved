var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (item) {
        this.products.push(item);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return this.products[index];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.lsk = 'productsKey';
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (item) {
        if (localStorage.getItem(this.lsk) == undefined)
            localStorage.setItem(this.lsk, JSON.stringify(new Array));
        var a = JSON.parse(localStorage.getItem(this.lsk));
        //let temp:object={name:item.getName(),scale:item.getScale()}
        a.push(item);
        localStorage.setItem(this.lsk, JSON.stringify(a));
    };
    ;
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var b = JSON.parse(localStorage.getItem(this.lsk));
        return new Product(b[index].name, b[index].scale);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var b = JSON.parse(localStorage.getItem(this.lsk));
        return b.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        //  this.name=("product "+_name+" #"+(Math.random()*100).toFixed(0));
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        //  console.log("scale of "+this.name+" is "+this.scale+" gramm"); //not mandatory
        return this.scale;
    };
    Product.prototype.getName = function () {
        //  console.log("name of product is "+this.name);//not mandatory
        return this.name;
    };
    return Product;
}());
var Scales = /** @class */ (function () {
    function Scales(_storageEngine) {
        this.storageEngine = _storageEngine;
    }
    Scales.prototype.add = function (prod) {
        this.storageEngine.addItem(prod);
    };
    ;
    Scales.prototype.getSumScale = function () {
        var answer = 0;
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            answer = answer + this.storageEngine.getItem(i).getScale();
        }
        console.log(answer); //needed for this task
        return answer;
    };
    ;
    Scales.prototype.getNameList = function () {
        var answer = [];
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            answer.push(this.storageEngine.getItem(i).getName());
        }
        console.log(answer); //needed for this task
        return answer;
    };
    return Scales;
}());
;
var scalesLocal = new Scales(new ScalesStorageEngineLocalStorage);
var scalesArray = new Scales(new ScalesStorageEngineArray);
var banana = new Product('banana', 23);
var apple = new Product("apple", 26);
var orange = new Product("orange", 24);
var coconut = new Product("coconut", 27);
scalesArray.add(banana);
scalesArray.add(apple);
scalesArray.add(orange);
scalesArray.add(coconut);
scalesLocal.add(banana);
scalesLocal.add(apple);
scalesLocal.add(orange);
scalesLocal.add(coconut);
scalesLocal.getSumScale();
scalesLocal.getNameList();
scalesArray.getSumScale();
scalesArray.getNameList();
//# sourceMappingURL=app.js.map
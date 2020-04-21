
interface IStorageEngine{ 
    addItem(item:Product):void; 
    getItem(index:number):Product;  
    getCount():number; 
}

class ScalesStorageEngineArray implements IStorageEngine{

    products:Array<Product>=[];

    addItem(item:Product):void {
this.products.push(item);
    }

    getItem(index:number):Product {
        return this.products[index]
    }

    getCount():number {
        return this.products.length
    }


}

class ScalesStorageEngineLocalStorage implements IStorageEngine{
    lsk: string='productsKey';

    addItem(item:Product):void {

if (localStorage.getItem(this.lsk)==undefined) localStorage.setItem(this.lsk, JSON.stringify(new Array));

    let a:Array<any>=JSON.parse(localStorage.getItem(this.lsk))
        //let temp:object={name:item.getName(),scale:item.getScale()}
            a.push(item);
    localStorage.setItem(this.lsk, JSON.stringify(a));
    };

    getItem(index:number):Product {
        let b:Array<any>=JSON.parse(localStorage.getItem(this.lsk));
        return new Product(b[index].name, b[index].scale);
    }

    getCount():number {
        let b:Array<any>=JSON.parse(localStorage.getItem(this.lsk));
        return b.length;
    }

}




class Product {

   private scale:number;
   private name:string;

    constructor(_name:string,_scale:number) {

//  this.name=("product "+_name+" #"+(Math.random()*100).toFixed(0));
    this.name=_name;
    this.scale=_scale;
    }

    getScale ():number {
//  console.log("scale of "+this.name+" is "+this.scale+" gramm"); //not mandatory
        return this.scale
    }

    getName():string {
//  console.log("name of product is "+this.name);//not mandatory
        return this.name
    }

}


class Scales<StorageEngine extends IStorageEngine>{

storageEngine: StorageEngine;
    constructor(_storageEngine:StorageEngine) {
        this.storageEngine=_storageEngine;
    }

    add (prod:Product):void{
this.storageEngine.addItem(prod)
    };

    getSumScale ():number{
        let answer:number=0;
            for (let i:number=0; i<this.storageEngine.getCount(); i++){
                answer=answer+this.storageEngine.getItem(i).getScale()
            }
                console.log(answer);//needed for this task
        return answer};

    getNameList ():Array<string>{
        let answer:Array<string>=[];
        for (let i:number=0; i<this.storageEngine.getCount(); i++){
            answer.push(this.storageEngine.getItem(i).getName());
        }
                    console.log(answer);//needed for this task
            return answer}
};



let scalesLocal:Scales<ScalesStorageEngineLocalStorage>=new Scales(new ScalesStorageEngineLocalStorage);
let scalesArray:Scales<ScalesStorageEngineArray>=new Scales(new ScalesStorageEngineArray);

let banana:Product=new Product('banana',23);
let apple:Product=new Product("apple",26);
let orange:Product=new Product("orange",24);
let coconut:Product=new Product("coconut",27);

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
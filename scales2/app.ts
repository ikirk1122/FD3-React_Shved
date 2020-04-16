interface IScalable { //now one interface
    getScale ():number;
    getName():string;
}


class Banana implements IScalable{//no more product, just banana

    scale:number;
    name:string;

    constructor() {//теперь все бананы по 25 грамм

      this.name=("banana №"+(Math.random()*100).toFixed(0));
        this.scale=25;
    }

    getScale ():number {
        console.log("scale of "+this.name+" is "+this.scale+" gramm"); //not mandatory
        return this.scale
    }

    getName():string {
        console.log("name of product is "+this.name);//not mandatory
        return this.name
    }

}

class Apple implements IScalable{//no more product, just banana

    scale:number;
    name:string;

    constructor() {//теперь все яблоки по 35 грамм
        this.name=("apple №"+(Math.random()*100).toFixed(0));
        this.scale=35;

    }

    getScale ():number {
       console.log("scale of "+this.name+" is "+this.scale+" gramm"); //not mandatory
        return this.scale
    }

    getName():string {
       console.log("name of product is "+this.name);//not mandatory
        return this.name
    }

};


class Scales{

    products: Array <IScalable>= [];//массив объектов реализующих указанный интерфейс IScalable

    constructor() {
    }

    add (prod:IScalable):void{//объекты реализующие IScalable
this.products.push(prod)
    };

    getSumScale ():number{
        let answer:number=0;
            for (let i:number=0; i<this.products.length; i++){
                answer=answer+this.products[i].getScale();}//call method not property
                console.log(answer);//not mandatory
        return answer};

    getNameList ():Array<string>{
                let answer:Array<string>=[];
                for (let i:number=0; i<this.products.length; i++){
                    answer.push(this.products[i].getName());}//call method not property
                    console.log(answer);//not mandatory
            return answer}
};

/*-----------------tests------------------*/

let scale1= new Scales ();
let banana1= new Banana ();
let banana2= new Banana ();
let apple1= new Apple ();
let apple2= new Apple ();

scale1.add(banana1);
scale1.add(apple1);
scale1.add(banana2);
scale1.add(apple2);

scale1.getNameList();//array of 4 Obj
scale1.getSumScale();//120

banana1.getName();
banana1.getScale();//25
apple1.getName();
apple1.getScale();//35

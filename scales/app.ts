class Product{

    scale:number;
    name:string;

    constructor(_name:string,_scale:number) {

    this.name=_name;
    this.scale=_scale;
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

class Banana extends Product{

    constructor(_scale:number) {
        super(("banana №"+(Math.random()*100).toFixed(0)),_scale); 
    }

}

class Apple extends Product{

    constructor(_scale:number) {
        super(("apple №"+(Math.random()*100).toFixed(0)),_scale); 
    }

};


class Scales{

    products: Array <Product>= [];

    constructor() {
    }

    add (prod:Product):void{
this.products.push(prod)
    };

    getSumScale ():number{
        let answer:number=0;
            for (let i:number=0; i<this.products.length; i++){
                answer=answer+this.products[i].scale;}
                console.log(answer);//not mandatory
        return answer};

    getNameList ():Array<string>{
                let answer:Array<string>=[];
                for (let i:number=0; i<this.products.length; i++){
                    answer.push(this.products[i].name);}
                    console.log(answer);//not mandatory
            return answer}
};

/*-----------------tests------------------*/

let scale1= new Scales ();
let banana1= new Banana (25);
let banana2= new Banana (35);
let apple1= new Apple (70);
let apple2= new Apple (50);

scale1.add(banana1);
scale1.add(apple1);
scale1.add(banana2);
scale1.add(apple2);

scale1.getNameList();//array of 4 Obj
scale1.getSumScale();//180

banana1.getName();
banana1.getScale();//25
apple1.getName();
apple1.getScale();//70


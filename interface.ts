export{}

class qaz
{
    name!:string;
    setname(name:string):void
    {
        this.name = name;
        }
}

class plm extends qaz implements test
{
    getname():string{
        return this.name 
    }
    test1() {
        {
            console.log("test class");
        }
    }
}
interface test
{
    test1():void;
}

let a = new plm()
a.setname ("Yash Patole");
console.log(a.getname());
a.test1();
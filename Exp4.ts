class student{
    public roll:Number;
    protected name:String;
constructor(rollno,sname){
    this.roll=rollno;
    this.name=sname;
}
}
class student1 extends student{
    private marks:Number;
    constructor(rollno:Number,sname:String,marks:Number){
    super(rollno,sname)
    this.marks=marks
}
display(){
    return "Roll No is "+this.roll+"\nName is "+this.name+"\nMarks are "+this.marks;
}
}
let stud:student1=new student1(53,"Yash Patole",64);

console.log(stud.display())

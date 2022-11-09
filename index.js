class student{

    static count=0;  //static variable to call

   constructor(name,age,ph_no,marks){

       this.name=name;

       this.age=age;

       this.ph_no=ph_no;

       this.marks=marks;

       student.countStudent();

   }

   static countStudent(){

       return(student.count++);     //this is how u access static variable

   }

   eligible(){

       if(this.marks >=40){

           console.log(`${this.name} age ${this.age} is eligible`);

       }

       else if(this.marks<40){

           console.log(`${this.name} age ${this.age} is not eligible`);

       }

   }
}

const abdullah=new student('abdullah',18,1234,98);

const hilal=new student('hilal',15,2345,55);

const jaffer=new student('jaffer',16,4567,33);

const sayed=new student('sayed',17,7891,17);

const aarzoo=new student('aarzoo',19,3456,70);

console.log(student.countStudent());

abdullah.eligible();

hilal.eligible();

jaffer.eligible();

sayed.eligible();

aarzoo.eligible();
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
   
   minPlacementAge(minAge){
    return (minMarks) => {
        if(this.age > minAge && this.marks>minMarks){
            console.log(this.name+' is ready for the place ment');
        }
        else{
            console.log(this.name+' is not ready for the place ment');
        }

    }


       

   }
}

const abdullah=new student('abdullah',18,1234,98);

const hilal=new student('hilal',15,2345,55);

const jaffer=new student('jaffer',16,4567,33);

const sayed=new student('sayed',17,7891,60);

const aarzoo=new student('aarzoo',19,3456,70);

console.log(student.countStudent());

abdullah.minPlacementAge(16)(40);

hilal.minPlacementAge(16)(40);

jaffer.minPlacementAge(16)(40);

sayed.minPlacementAge(16)(40);

aarzoo.minPlacementAge(16)(40);
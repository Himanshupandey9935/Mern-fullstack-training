const f1={
name : "himanshu pandey",
marks :["100","100","100"],

avg: function(){
    let sum=0;
    for(let i=0; i<this.marks.length; i++){
        sum +=this.marks[i];
        return sum/this.marks.length;
    }
    return sum/this.marks.length;
}

}

console.log(f1.avg());
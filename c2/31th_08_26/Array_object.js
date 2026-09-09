const post = {
    title : "Learning Mern",
    author : { name : "himanshu pandey ", verified : true},
    tags : ["Javascipt", "react"],
    comments: [
        {user : "Leo", text : "great post"},
        {user: "priya", text: "very helpfull"}
    ]
};

console.log(post.author.name);
console.log(post.tags[1]);
console.log(post.comments[0].text); 
import React from 'react';
import img1 from '../../../Images/1.jpeg';
import img2 from '../../../Images/react.png';
import ExplainBlogs from '../ExplainBlogs/ExplainBlogs';
const Blogss =[
    {   
        id: 1,
        title:'Javascript & Learn It In Deep',
        img: img1,
        description:'Javascript is a web application programming language. As a programming language, it has to maintain some rules or I can say that some rules that javascript works on. There are many confusions in javascript rules. I try to solve the confusion.1. Truthy and Falsy values:Conditional Statements are familiar faces in programming language. Sometimes, we become confused using conditional statements. I can hardly find what is true and what is false. In machine 1 is positive and 0 is negative. In javascript 0 is a negative and false value and others are positive or True value. what will be the output? 0 is a negative value for a machine or computer. So you may think that result will be “this is not fun”.but here fun is a string. you it has a value, it s not null or 0this will print “this is fun”. Again look at the code. You may think here false is true for if-else statement. but false is always false. So, the code will print “this is not love. here love has declared but no value has assigned. For this, the result will be undefined.Then null means there is no value of the variable. Look at the example.the first console will be “null” but the second console will be “object”. undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.3.double equal (==) vs triple equal (===):Comparing between double equal and triple equal main factor is double equal(==) only check value, or I can say double equal(==) tries to make two-part same. But triple equal (===) check both type and value. Look at the example. 4.Closure, encapsulation, private variable:If I call a function that returns another function and if the function is declared in different variable then, for the different variable, the function will return different value and this is called Closure. That means the value of each variable is closed for each.'
    },
    {   
        id:2,
        title:'All the fundamental actions “React” react!',
        img:img2,
        description:'React is a popular javascript library nowadays. In the blog, we will know about how React.js works, the core fundamentals of React.js, and others. Lets get start it.3.How React.js works & Virtual DOM:DOM means document object model. So, when we run a code or compile it , the web browser makes a DOM.But the problem is, if I dynamic codes, the browser needs more time to compile it.Basically, react makes some Virtual DOMs that only works on the individual line of codes that have been changed. But javascript changes the whole div. 4.How React.js works & JSX:React.js does not follow HTML.A react component returns something using JSX.JSX means that carries both HTML and Javascript in same way. “Babel” converts it into javascript and browser readable code.If we look at the code. 5.How React.js works & NPM: NPM is an abbreviation used for the “node package manager”. It is a package manager for JavaScript.When we install “create-react-app” we find nodules_ package inside it. Before coming node, javascript was not compilable without web browser. Node changed the total rule and now javascript is compilable in any machine. So, in the main topic, how React.js works depends on node_modules_. Every command was build in node_modules. For this when we want to install something in React application, we type the command “npm” then type something. then the package is installed inside the node_package.'
    }
]
const Blogs = () => {
    return (
        <div>
            {
                Blogss.map(blog => <ExplainBlogs blog={blog}></ExplainBlogs> )
            }
        </div>
    );
};

export default Blogs;
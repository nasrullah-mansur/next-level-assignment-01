<h1 align="left">What is the use of the keyof keyword in TypeScript?</h1>

###

<p align="left">The keyword "keyof" is a useful keyword in TypeScript. It is generally used to create "union type" of the keys of an object. When you need to get all keys of an object dynamically you have to use "keyof" keyword in a generic function. Also, you have to use it with "extends" keyword when you want to use. Basically it use, when you don't know which object will come from a function as an argument but you need to get all keys of this object. Bellow I want to give an example.<br>  <br>function getProperty<A, B extends keyof A>(obj: A, key: B): A[B] {<br>  return obj[key];<br>}<br><br>const user = { name: "Nasrullah", age: 30 };<br>const name = getProperty(user, "name"); // Valid<br>const email = getProperty(user, "email"); // Invalid</p>

###

<h1 align="left">Provide an example of using union and intersection types in TypeScript.</h1>

###

<h4 align="left">Union types</h4>

###

<p align="left">Union types in TypeScript accept multiple types and tye value can be one of the types in the union (like logical or operator). You can use it using "|" symbol. Example bellow.<br><br>function printId(id: number | string) {<br>  console.log("Your ID is: " + id);<br>}</p>

###

<h4 align="left">intersection types</h4>

###

<p align="left">intersection types use for combining multiple type into one. It will used when you have to multiple types at once (like logical and operator). Example bellow:<br><br>type Person = { name: string };<br>type Worker = { jobTitle: string };<br><br>type Employee = Person & Worker;<br><br>const employee: Employee = {<br>  name: "John",<br>  jobTitle: "Developer",<br>};</p>

###

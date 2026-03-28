const user = {
name: "Grace",
age: 19, 
favoriteLanguage: "JavaScript"
}

function introduceUser(person) {
return "My name is " + person.name + ". I am " + person.age + " years old and I like " + person.favoriteLanguage + ".";
}

console.log(introduceUser(user));


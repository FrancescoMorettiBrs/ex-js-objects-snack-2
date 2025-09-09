// 🏆 Code Question 1

// const hamburger = { name: "Cheese Burger", weight: 250 };
// const secondBurger = hamburger;
// secondBurger.name = 'Double Cheese Burger';
// secondBurger.weight = 500;

// console.log(hamburger.name); // Double Cheese Burger
// console.log(secondBurger.name ); // Double Cheese Burger

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Il nome del panino cambia in entrambi in: "Double Cheese Burger"
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 1

// 🏆 Code Question 2

const hamburger = { 
    name: "Cheese Burger", 
    weight: 250,
    ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};

const secondBurger = {...hamburger};
secondBurger.ingredients[0] = "Salad";

console.log(hamburger.ingredients[0]); // Salad
console.log(secondBurger.ingredients[0]); // Salad

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!
// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// In entrambi verrà stamapato "Salad" perchè facendo lo spread operator solo per l'oggetto "hamburger", l'array annidato al suo interno è una reference e di conseguenza, se lo cambiamo,tramite la nuova variabile che abbiamo creato, verrà modificato anche il valore all'interno dell'oggetto primario.
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// 2
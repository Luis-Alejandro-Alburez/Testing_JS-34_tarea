/**               Libreria
 *
 * Te han contratado como programador para crear una
 * libreria que permita gestionar los tipos de
 * medios diferentes que se pueden prestar:
 * libros, CDs y peliculas.
 *
 * En este proyecto, crearemos una clase padre Media con
 * tres subclases: Book, Movie y CD.  Esta tres subclases
 * tienen las siguientes propiedades y mÃ©todos:
 *
 * Libro:
 * - Propiedades:
 *   -author (string)
 *   -title (string)
 *   -pages (number)
 *   -isCheckedOut (boolean, inicializado a false)
 *   -ratings (inicialmente un array vacÃ­o)
 * Getters: todas las propiedades tienen un getter.
 * MÃ©todos:
 *   -getAverageRating(),
 *   -toggleCheckOutStatus()
 *   -addRating()
 *
 * PelÃ­cula:
 * Propiedades:
 *      - director (string)
 *      - title (string)
 *      - runTime (number)
 *      - isCheckedOut (boolean, inicializado a false)
 *      - ratings (inicialmente un array vacÃ­o)
 * Getters: todas las propiedades tienen un getter.
 * MÃ©todos:
 *       - getAverageRating()
 *       - toggleCheckOutStatus()
 *       - addRating()
 *
 * CD:
 * Propiedades:
 *      - artist (string)
 *      - title (string)
 *      - isCheckedOut (boolean, inicializado false)
 *      - ratings (inicialmente un array vacÃ­o)
 *      - songs (array de strings)
 */

/*Ejercicio:
Paso 1:
Comencemos creando una clase padre para nuestras clases 
Book, CD y Movie.
Crea una clase vacÃ­a llamada Media 
*/

class Media {
  constructor(title, isCheckedOut, ratings) {
    this._title = title;
    this._isCheckedOut = isCheckedOut || false;
    this._ratings = ratings || [];
  }

  //getter para title
  get title() {
    return this._title;
  }

  //getter para isCheckedOut
  get isCheckedOut() {
    return this._isCheckedOut;
  }

  //getter para ratings
  get ratings() {
    return this._ratings || [];
  }

  set isCheckedOut(newStatus) {
    if (typeof newStatus === "boolean") {
      this._isCheckedOut = newStatus;
    } else {
      console.error(
        "Error: isCheckedOut debe ser un valor booleano (true/false)"
      );
    }
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
    return this._isCheckedOut; // Devuelve el nuevo estado
  }

  getAverageRating() {
    return this._ratings.length > 0
      ? console.log(
          this._ratings.reduce((a, b) => a + b, 0) / this._ratings.length
        )
      : console.log(0);
  }

  addRating(newRating) {
    if (typeof newRating === "number") {
      this._ratings.push(newRating);
    } else {
      console.error("Error: el rating debe ser un número");
    }
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title); // Llama al constructor de la clase Media
    this._author = author;
    this._pages = pages;
    this._isCheckedOut = false; // Valor por defecto
    this._ratings = []; // Valor por defecto
  }

  // Getters para las nuevas propiedades
  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title); // Llama al constructor de Media con el título
    this._director = director;
    this._runTime = runTime;
    this._isCheckedOut = false; // Valor inicial false
    this._ratings = []; // Matriz inicialmente vacía
  }

  // Getters
  get director() {
    return this._director;
  }

  get title() {
    return this._title;
  }

  get runTime() {
    return this._runTime;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  // Métodos heredados de Media
  getAverageRating() {
    return super.getAverageRating();
  }

  toggleCheckOutStatus() {
    return super.toggleCheckOutStatus();
  }

  addRating(newRating) {
    super.addRating(newRating);
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

console.log(historyOfEverything._isCheckedOut);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything._isCheckedOut);
console.log(historyOfEverything.ratings);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything._ratings);
historyOfEverything.getAverageRating();

const speed = new Movie("Jan de Bont", "speed", 116);

/*
Paso 2:
Dentro de la clase Media cree un mÃ©todo constructor()
vacÃ­o que tome un parÃ¡metro.
Este argumento establecerÃ¡ la Ãºnica propiedad que
estÃ¡ en las tres subclases de Media y no tiene
un valor predeterminado 

Paso 3:
Dentro del constructor, establezca los valores
de las propiedades de Media que comparten Book,
CD y Movie.  Anteponga un guiÃ³n bajo (_) a todos
los nombres de propiedad.

Paso 4:
Crea getters para las propiedades title, isCheckedOut
y ratings.  Cada captador debe devolver el valor
guardado en la propiedad correspondiente.

Paso 5:
Crea un establecedor (setter) para la propiedad
isCheckedOut.

Paso 6:
Debajo de sus captadores, cree un mÃ©todo llamado
toggleCheckOutStatus que cambien el valor guardado
en la propiedad _isCheckedOut

Paso 7:
Debajo de toggleCheckOutStatus(), crea un mÃ©todo llamado 
getAverageRating. Este debe devolver el valor promedio 
de la matriz ratings.

Utilice el mÃ©todo de reduce para hallar la suma del 
array ratings. Divida esta suma entre la longitud del 
array ratings y devuelva el resultado.

Pista:
El cÃ³digo siguiente calcula la suma de los nÃºmeros 
guardados en la matriz ratings.

let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);

Puede acceder a la longitud de una matriz utilizando .length
const lengthOfArray = myArray.length;

Paso 8:
Agreguemos un mÃ©todo llamado addRating que acepta un 
argumento y  usa .push()para agregarlo al final de la  
matriz ratings.

Paso 9:
Completa la clase Book (ve al paso a paso, paso 10)
Paso 10:
Dentro de la clase Book, 
cree un constructor que acepte tres argumentos. 
Estos argumentos se utilizan para establecer propiedades 
sin valores predeterminados.
Paso 11:
Llama  en la primera lÃ­nea a super del mÃ©todo constructor
de Book. PÃ¡sale cualquier argumento que use el 
constructor principal.
Paso 12:
Utilice los argumentos restantes para establecer las 
propiedades author y pagesBook.
Paso 13:
Dado que nuestra clase Book hereda las propiedades y los 
captadores de Media, solo necesitamos crear dos nuevos 
captadores en la clase Book.
Agregue dos nuevos getters a la clase Book. 
Cada getter debe devolver el valor guardado en su 
propiedad correspondiente.

Paso 14:
Crear una clase Movie completa usando solo las 
especificaciones de propiedad, captador y mÃ©todo a 
continuaciÃ³n:
propiedades : director(cadena), title(cadena), 
              runTime(nÃºmero), isCheckedOut(booleano, 
              inicialmente false) y 
              ratings(matriz, inicialmente vacÃ­a)
getters : todas las propiedades tienen un getter
mÃ©todos : .getAverageRating(), .toggleCheckOutStatus(), 
           y.addRating()

Siga estos pasos para crear una Movieclase que extienda Media:

Crea una clase Movie vacÃ­a que extienda Media.
Crea un constructor que acepte argumentos para director, 
title, y runTime.
En la primera lÃ­nea del constructor,  super y pÃ¡sa title.
En las siguientes dos lÃ­neas, configure sus 
propiedades _director y _runTime.
Debajo del constructor, cree los getters para director 
y runTime. 
Cada getter debe devolver el valor guardado en esa 
propiedad.

Paso 15:
Crea una instancia Book con las siguientes propiedades:
*Author: 'Bill Bryson'
*Title: 'A Short History of Nearly Everything'
*Pages: 544

Guarda esta instancia en una variable llamada
historyOfEverything. 


Paso 16:
Realiza una llamada a toggleCheckOutStatus() en la
instancia historyOfEverything.

Paso 17:
Registra en consola el valor guardado en la propiedad
isCheckedOut de la instancia historyOfEverything.

Paso 18:
Llama 3 veces al mÃ©todo addRating() en la instancia
historyOfEveryThing con las entradas 4, 5 y 5.

Paso 19:
Llama al mÃ©todo getAverageRating() en la instancia
historyOfEverything y registra el resultado en consola.

Paso 20:
Crea una instancia Movie con las siguientes propiedades:
director: 'Jan de Bont',
title: 'speed', 
runTime: 116

Guarda esta instancia en una variable llamada speed.

Paso 21:
Realiza una llamada a toggleCheckOutStatus() en la
instancia speed.

Paso 22:
Registra en consola el valor guardadp en la propiedad
isCheckedOut de la instancia speed.

*/
console.log(speed.isCheckedOut);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
/*

Paso 23:
Llama 3 veces al mÃ©todo addRating() en la instancia
speed con las entradas 1, 1, y 5.

*/
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.ratings);
/*

Paso 24:
Llama al mÃ©todo getAverageRating() en la instancia 
speed y registre el resultado en consola
*/
speed.getAverageRating();
/*
Paso 25:
Felicitaciones, has completado el ejercicio.
Si desea seguir trabajando en este proyecto, hemos 
enumerado algunas vÃ­as para continuar con su progreso 
actual.

Agregue mÃ¡s propiedades a cada clase 
( movieCast, songTitles, etc.)

Crea una  claseCD que extienda Media.

En .addRating(), asegÃºrese de que la entrada estÃ© entre 
1 y 5.
Crea un mÃ©todo llamado shuffle para la clase CD. 
Este mÃ©todo devuelve una matriz aleatoria de todas las 
canciones de la propiedad songs.
Crea una clase llamada Catalog que contenga todos los 
elementos Media de nuestra biblioteca.

*/

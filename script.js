class Persona{
    constructor(nombre, edad, genero) {
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
      this.obtDetalles = function () {
        console.log(`La persona se llama ${this.nombre}, tiene ${this.edad} años y es ${this.genero}.`);
      }
    }
}

class Estudiante extends Persona { 
    constructor (nombre, edad, genero, curso, grupo) {
      super(nombre, edad, genero) // Llama al constructor del padre
      this.curso = curso;
      this.grupo = grupo;
      this.registrar = function () {
        console.log(`El estudiante se llama ${this.nombre}, tiene ${this.edad} años, es ${this.genero}, asiste a ${this.curso} curso y pertenece al grupo ${this.grupo}.`);
      }
    }
};

let Jose = new Estudiante("José", "25", "hombre", "4º", "6");
Jose.obtDetalles();
Jose.registrar();

class Profesor extends Persona { 
    constructor (nombre, edad, genero, asignatura, nivel) {
      super(nombre, edad, genero) // Llama al constructor del padre
      this.asignatura = asignatura;
      this.nivel = nivel;
      this.asignar = function () {
        console.log(`El profesor se llama ${this.nombre}, tiene ${this.edad} años, es ${this.genero} y enseña ${this.asignatura} en el nivel ${this.nivel}.`);
      }
    }
};

let Carlos = new Profesor("Carlos", "48", "hombre", "Matemáticas", "alto");
Carlos.obtDetalles();
Carlos.asignar();

class Warrior{
    constructor(life, power) {
        this.life = life;
        this.power = power;
        this.attack = function () {
          return this.power;
        }
        this.defend = function (damage) {
            this.life -= damage;
            console.log(`Al guerrero le quedan ${this.life} puntos de vida`)
        }
        this.statistics = function () {
            console.log(`Al guerrero le quedan ${this.life} puntos de vida y tiene un ataque de ${this.power} puntos`)
        }
      }
}

class Maya extends Warrior { 
    constructor (life, power) {
      super(life, power) // Llama al constructor del padre
      this.drinkColaCao = function () {
        this.power += 10;
      }
    }
};

class Aztec extends Warrior { 
    constructor (life, power) {
      super(life, power) // Llama al constructor del padre
      this.drinkNesquik = function () {
        this.life += 10;
      }
    }
};

let GuerreroAzteca = new Aztec(100, 30);
let GuerreroMaya = new Maya(100, 30);
GuerreroAzteca.drinkNesquik();
GuerreroMaya.drinkColaCao();
GuerreroAzteca.defend(GuerreroMaya.attack());
GuerreroMaya.defend(GuerreroAzteca.attack());
GuerreroAzteca.statistics();
GuerreroMaya.statistics();
GuerreroAzteca.drinkNesquik();
GuerreroMaya.drinkColaCao();
GuerreroAzteca.defend(GuerreroMaya.attack());
GuerreroMaya.defend(GuerreroAzteca.attack());
GuerreroAzteca.statistics();
GuerreroMaya.statistics();
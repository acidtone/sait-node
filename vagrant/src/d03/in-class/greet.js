greeting = {
  firstname: 'Mandy',
  lastname: 'Michael',
  spanish: function() {
    console.log(`Hola, ${this.firstname}!`);
  },
  english: function() {
    console.log(`Hello, ${this.firstname}!`);
  }
}


module.exports = greeting;
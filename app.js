// Modules
// CommonJS, every file is module (by default)
// Modules = Encapsulated Code (only shary minimum)
const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');

sayHi('susan');
sayHi(john);
sayHi(peter);
  
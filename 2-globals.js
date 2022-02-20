console.log('Node!');

// __dirname - path ti cyrrent directory
// __filename = file name
// require - function to use modules (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

console.log(__dirname);
setInterval(() => {
    console.log('Hello world');
}, 1000);

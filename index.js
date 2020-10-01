const info = require("./information.js")
var cowsay = require("/usr/local/lib/node_modules/cowsay")

 
console.log(cowsay.say({
	text : `Hello I am ${info.name} from ${info.campus} campus! `

}));
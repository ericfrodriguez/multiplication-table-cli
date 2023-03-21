const argv = require('./config/yargs');
const colors = require('colors');
const { createFile } = require('./helpers/multiply');


console.clear();


createFile(argv.b, argv.l, argv.limit)
	.then(fileName => console.log(colors.brightGreen(`\n✓ ${fileName} created`)))
	.catch(err => console.log(err))

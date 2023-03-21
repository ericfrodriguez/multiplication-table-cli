const yargs = require('yargs');


const args = process.argv

const argvOptions = {
	base: {
		alias: 'b',
		type: 'number',
		demandOption: true,
        describe: 'Number base of the multiplication table'
	},
	list: {
		alias: 'l',
		type: 'boolean',
		default: false,
        describe: 'Displays the multiplication table in the terminal'
	},
    limit: {
        type: 'number',
        default: 10,
        describe: 'Table results limit'
    }
}

const argv = yargs(args)
	.options(argvOptions)
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			throw 'La base debe ser un número';
		} else {
			return true;
		}
	})
	.argv

module.exports = argv;
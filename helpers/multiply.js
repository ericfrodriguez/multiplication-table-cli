const colors = require('colors');
const fs = require('node:fs');


const createTitle = (title) => {
    
    const text = `================================
  Multiplication table of ${title}
================================`;
    
    return text
}

/**
 * @param {Number} base Create multiplication table of a `base` number
 * @param {Boolean} list Show the table in the console with `list` option
 * @param {Number} limit Set the limit of the multiplication table results
 */
const createFile = async (base = 5, list = true, limit = 10) => {

    try {

        const titleTerminal = createTitle(colors.bold.brightCyan(base))
        const title = createTitle(base)

        let tableTerminal = '';
        let table = '';

        for (let i = 1; i <= limit; i++) {
            tableTerminal += `\n\t${base} ${colors.brightRed('x')} ${i} ${colors.brightRed('=')} ${base * i}`;
            table += `\n${base} x ${i} = ${base * i}`;
        }

        if (list) {
            console.log(colors.brightBlue(titleTerminal), tableTerminal);
        }

        const output = title + table;

        fs.writeFileSync(`./output/tabla-${base}.txt`, output)

        return `tabla-${base}.txt`
    } catch (error) {
        throw err;
    }


}

module.exports = {
    createFile
};
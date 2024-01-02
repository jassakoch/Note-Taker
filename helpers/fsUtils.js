const fs = require('fs');
const util = require('util');

// Promise version of fs.readFile
const readFromFile =util.promisify(fs.readFile);
/** 
 *  Function to write data to the JSON file given a destination
 *  @param {string} destination The file you want to write to.
 *  @param {object} content you want to write to the file.
 *  @param {void} Nothing
*/

const writeToFile = (desination, content) =>
fs.writeFile(desination, JSON.stringify(content,null, 4,), (err) =>
err ? console.error(err) : console.info(`\nData written to ${desination}`)
);

/**
 * Funciton to read data from a given file and append content
 * @param {object} content you want to append to the file.
 * @param {string} file the path to the file
 * @param {void} Nothing
 */

const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file,parsedData);
        
        
        }
    });
};

module.exports = {readFromFile, writeToFile, readAndAppend };

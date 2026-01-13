const path = require('path');

let rootDir;

// Method 1: Try process.mainModule (works with nodemon)
if (process.mainModule && process.mainModule.filename) {
  rootDir = path.dirname(process.mainModule.filename);
} 
// Method 2: Try require.main (works with regular node)
else if (require.main && require.main.filename) {
  rootDir = path.dirname(require.main.filename);
} 
// Method 3: Fallback to current directory
else {
  rootDir = __dirname;
}

module.exports = rootDir;
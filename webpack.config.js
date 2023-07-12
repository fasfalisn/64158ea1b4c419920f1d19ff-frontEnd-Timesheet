const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'August' : './javascript/August.js',
	'addEmployee' : './javascript/addEmployee.js',
	'addAugust' : './javascript/addAugust.js',
	'editAugust' : './javascript/editAugust.js',
	'editEmployee' : './javascript/editEmployee.js',
	'September' : './javascript/September.js',
	'addSeptember' : './javascript/addSeptember.js',
	'editSeptember' : './javascript/editSeptember.js',
	'October' : './javascript/October.js',
	'addOctober' : './javascript/addOctober.js',
	'editOctober' : './javascript/editOctober.js',
	'November' : './javascript/November.js',
	'addNovember' : './javascript/addNovember.js',
	'editNovember' : './javascript/editNovember.js',
	'December' : './javascript/December.js',
	'addDecember' : './javascript/addDecember.js',
	'editDecember' : './javascript/editDecember.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};
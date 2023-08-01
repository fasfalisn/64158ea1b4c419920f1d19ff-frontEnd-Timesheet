const path = require('path');

module.exports = {
  entry: {
	'Home' : './javascript/Home.js',
	'addEmployee' : './javascript/addEmployee.js',
	'August' : './javascript/August.js',
	'addAugust' : './javascript/addAugust.js',
	'editAugust' : './javascript/editAugust.js',
	'editEmployee' : './javascript/editEmployee.js',
	'addSeptember' : './javascript/addSeptember.js',
	'September' : './javascript/September.js',
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
	'addDay' : './javascript/addDay.js',
	'editDay' : './javascript/editDay.js',
	'addMonth' : './javascript/addMonth.js',
	'editMonth' : './javascript/editMonth.js',
	'AddWorkpackage' : './javascript/AddWorkpackage.js',
	'editWorkpackage' : './javascript/editWorkpackage.js',
	'addProject' : './javascript/addProject.js',
	'editProject' : './javascript/editProject.js',
	'userProfile' : './javascript/userProfile.js',
	'projectPage' : './javascript/projectPage.js',
	'workpackagePage' : './javascript/workpackagePage.js',
	'monthPage' : './javascript/monthPage.js',
	'profile' : './javascript/profile.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};
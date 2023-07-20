const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/Home', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/Home/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Home.html')));
			this.app.get('/addEmployee', (req, res) => res.sendFile(path.join(__dirname,'html','addEmployee.html')));
			this.app.get('/addEmployee/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addEmployee.html')));
			this.app.get('/August', (req, res) => res.sendFile(path.join(__dirname,'html','August.html')));
			this.app.get('/August/:id', (req, res) => res.sendFile(path.join(__dirname,'html','August.html')));
			this.app.get('/addAugust', (req, res) => res.sendFile(path.join(__dirname,'html','addAugust.html')));
			this.app.get('/addAugust/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addAugust.html')));
			this.app.get('/editAugust', (req, res) => res.sendFile(path.join(__dirname,'html','editAugust.html')));
			this.app.get('/editAugust/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editAugust.html')));
			this.app.get('/editEmployee', (req, res) => res.sendFile(path.join(__dirname,'html','editEmployee.html')));
			this.app.get('/editEmployee/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editEmployee.html')));
			this.app.get('/addSeptember', (req, res) => res.sendFile(path.join(__dirname,'html','addSeptember.html')));
			this.app.get('/addSeptember/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addSeptember.html')));
			this.app.get('/September', (req, res) => res.sendFile(path.join(__dirname,'html','September.html')));
			this.app.get('/September/:id', (req, res) => res.sendFile(path.join(__dirname,'html','September.html')));
			this.app.get('/editSeptember', (req, res) => res.sendFile(path.join(__dirname,'html','editSeptember.html')));
			this.app.get('/editSeptember/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editSeptember.html')));
			this.app.get('/October', (req, res) => res.sendFile(path.join(__dirname,'html','October.html')));
			this.app.get('/October/:id', (req, res) => res.sendFile(path.join(__dirname,'html','October.html')));
			this.app.get('/addOctober', (req, res) => res.sendFile(path.join(__dirname,'html','addOctober.html')));
			this.app.get('/addOctober/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addOctober.html')));
			this.app.get('/editOctober', (req, res) => res.sendFile(path.join(__dirname,'html','editOctober.html')));
			this.app.get('/editOctober/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editOctober.html')));
			this.app.get('/November', (req, res) => res.sendFile(path.join(__dirname,'html','November.html')));
			this.app.get('/November/:id', (req, res) => res.sendFile(path.join(__dirname,'html','November.html')));
			this.app.get('/addNovember', (req, res) => res.sendFile(path.join(__dirname,'html','addNovember.html')));
			this.app.get('/addNovember/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addNovember.html')));
			this.app.get('/editNovember', (req, res) => res.sendFile(path.join(__dirname,'html','editNovember.html')));
			this.app.get('/editNovember/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editNovember.html')));
			this.app.get('/December', (req, res) => res.sendFile(path.join(__dirname,'html','December.html')));
			this.app.get('/December/:id', (req, res) => res.sendFile(path.join(__dirname,'html','December.html')));
			this.app.get('/addDecember', (req, res) => res.sendFile(path.join(__dirname,'html','addDecember.html')));
			this.app.get('/addDecember/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addDecember.html')));
			this.app.get('/editDecember', (req, res) => res.sendFile(path.join(__dirname,'html','editDecember.html')));
			this.app.get('/editDecember/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editDecember.html')));
			this.app.get('/addDay', (req, res) => res.sendFile(path.join(__dirname,'html','addDay.html')));
			this.app.get('/addDay/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addDay.html')));
			this.app.get('/editDay', (req, res) => res.sendFile(path.join(__dirname,'html','editDay.html')));
			this.app.get('/editDay/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editDay.html')));
			this.app.get('/addMonth', (req, res) => res.sendFile(path.join(__dirname,'html','addMonth.html')));
			this.app.get('/addMonth/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addMonth.html')));
			this.app.get('/editMonth', (req, res) => res.sendFile(path.join(__dirname,'html','editMonth.html')));
			this.app.get('/editMonth/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editMonth.html')));
			this.app.get('/AddWorkpackage', (req, res) => res.sendFile(path.join(__dirname,'html','AddWorkpackage.html')));
			this.app.get('/AddWorkpackage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','AddWorkpackage.html')));
			this.app.get('/editWorkpackage', (req, res) => res.sendFile(path.join(__dirname,'html','editWorkpackage.html')));
			this.app.get('/editWorkpackage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editWorkpackage.html')));
			this.app.get('/addProject', (req, res) => res.sendFile(path.join(__dirname,'html','addProject.html')));
			this.app.get('/addProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addProject.html')));
			this.app.get('/editProject', (req, res) => res.sendFile(path.join(__dirname,'html','editProject.html')));
			this.app.get('/editProject/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editProject.html')));
			this.app.get('/userProfile', (req, res) => res.sendFile(path.join(__dirname,'html','userProfile.html')));
			this.app.get('/userProfile/:id', (req, res) => res.sendFile(path.join(__dirname,'html','userProfile.html')));
			this.app.get('/projectPage', (req, res) => res.sendFile(path.join(__dirname,'html','projectPage.html')));
			this.app.get('/projectPage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','projectPage.html')));
			this.app.get('/workpackagePage', (req, res) => res.sendFile(path.join(__dirname,'html','workpackagePage.html')));
			this.app.get('/workpackagePage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','workpackagePage.html')));
			this.app.get('/monthPage', (req, res) => res.sendFile(path.join(__dirname,'html','monthPage.html')));
			this.app.get('/monthPage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','monthPage.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;
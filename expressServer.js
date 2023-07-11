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
			this.app.get('/August', (req, res) => res.sendFile(path.join(__dirname,'html','August.html')));
			this.app.get('/August/:id', (req, res) => res.sendFile(path.join(__dirname,'html','August.html')));
			this.app.get('/addEmployee', (req, res) => res.sendFile(path.join(__dirname,'html','addEmployee.html')));
			this.app.get('/addEmployee/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addEmployee.html')));
			this.app.get('/addAugust', (req, res) => res.sendFile(path.join(__dirname,'html','addAugust.html')));
			this.app.get('/addAugust/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addAugust.html')));
			this.app.get('/editAugust', (req, res) => res.sendFile(path.join(__dirname,'html','editAugust.html')));
			this.app.get('/editAugust/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editAugust.html')));
			this.app.get('/editEmployee', (req, res) => res.sendFile(path.join(__dirname,'html','editEmployee.html')));
			this.app.get('/editEmployee/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editEmployee.html')));
			this.app.get('/September', (req, res) => res.sendFile(path.join(__dirname,'html','September.html')));
			this.app.get('/September/:id', (req, res) => res.sendFile(path.join(__dirname,'html','September.html')));
			this.app.get('/addSeptember', (req, res) => res.sendFile(path.join(__dirname,'html','addSeptember.html')));
			this.app.get('/addSeptember/:id', (req, res) => res.sendFile(path.join(__dirname,'html','addSeptember.html')));
			this.app.get('/editSeptember', (req, res) => res.sendFile(path.join(__dirname,'html','editSeptember.html')));
			this.app.get('/editSeptember/:id', (req, res) => res.sendFile(path.join(__dirname,'html','editSeptember.html')));
			
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
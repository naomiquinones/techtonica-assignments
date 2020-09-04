const connection = require('./connection');
const app = require('./app');

 const pgConnect = () => {
  connection.connect((err) =>{
    if (err) throw err;

     console.log('-*-*-*-*-*-*-*-*-*-*\n-*-*-*-*-*-*\n\nWelcome to Eventonica\n-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*')
    console.log("-*-*\nconnected as Administrator\n-*-*");

     app.startQuestion(()=>{ connection.end() });
  })
}

 // *Uncomment below line once you have mySQL setup

 pgConnect();
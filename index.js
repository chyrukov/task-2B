var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());

app.get('/', function(req, res, next){
  const str = req.query.fullname;
  if (str.length === 0){
    res.send('Invalid fullname');
    return;
  }
  const m = str.search('[0-9_+*\-\/]');
  //console.log(m);
  if (m != -1){
    res.send('Invalid fullname');
    return;
  }
  const arr = str.split(' ');
  if (arr.length > 3){
    res.send('Invalid fullname');
  }
  else if (arr.length === 3){
    res.send (`${arr[2]} ${arr[0].charAt(0)}. ${arr[1].charAt(0)}.`);
  }
  else if (arr.length === 2){
    res.send (`${arr[1]} ${arr[0].charAt(0)}.`);
  }
  else {
      res.send (`${arr[0]}`);
  }
});

app.listen(3000, function(){
  console.log('CORS-enabled web server listening on port 3000');
});

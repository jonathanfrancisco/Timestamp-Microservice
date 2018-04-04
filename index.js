
// MODULES
const express = require('express');
const app = express();
const moment = require('moment');
const invalid = require('moment').invalid;


// ROUTES
app.get('/:time', (req, res) => {
    
  const {time} = req.params;

  if(moment(time, 'X').isValid() || moment(time, 'MMMM D YYYY').isValid())
    if(isNaN(time))
        res.json({unix: moment(time).unix(), natural_lanuage: moment(time).format('MMMM D YYYY')});
    else
        res.json({unix: time, natural_lanuage: moment.unix(time).format('MMMM D YYYY')});
  else
    res.json({unix: null,natural_lanuage: null});

}); 
  

app.listen(3000, () => {
    console.log('Server has started');
});
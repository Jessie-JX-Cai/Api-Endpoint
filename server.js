var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api-endpoint', function(request, response) {
    var nameString = request.query.name;
    var historyString = request.query.history;
    
      var jsonContent = { 
            title: nameString,
            imageUrl: "https://image.flaticon.com/icons/png/512/61/61456.png",
            contact: [ {id: 12345, name: "Jessie Cai111"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"}],
            footprint: [{objectId:"00U1y000002SCDFEA4",parentObject:"Contact",detailField:"TRAVEL CLUB SIM",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2020-06-01 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is a really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"}],
            show: true 
        };
    
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Content-Type','application/json;charset=UTF-8');
    response.send(JSON.parse(JSON.stringify(jsonContent)));
    
});


app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

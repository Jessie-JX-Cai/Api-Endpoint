// var express = require('express');
// var bodyParser = require('body-parser');
// var pg = require('pg');
// var app = express();

// app.set('port', process.env.PORT || 5000);
// app.use(express.static('public'));
// app.use(bodyParser.json());

// app.get('/api-endpoint', function(request, response) {
//     var nameString = request.query.name;
//     var historyString = request.query.history;
    
//       var jsonContent = { 
//             title: nameString,
//             imageUrl: "https://image.flaticon.com/icons/png/512/61/61456.png",
//             contact: [ {id: 12345, name: "Jessie Cai111"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"}],
//             //footprint: [{objectId:"00U1y000002SCDFEA4",parentObject:"Contact",detailField:"TRAVEL CLUB SIM",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2020-06-01 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is a really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"}],
//             footprint: [{objectId:"00U1y000002SCDFEA4",parentObject:"Contact",detailField:"TRAVEL CLUB SIM",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2020-06-01 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is a really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"},{objectId:"00U1y000002SCDGEA4",parentObject:"Contact",detailField:"IPHONE 11",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2019-05-01 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is another really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#4ac076"},{objectId:"00U1y000002SCDHEA4",parentObject:"Contact",detailField:"SAMSUNG 55 QLED FLAT SMAR",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2020-04-07 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is the final really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"},{objectId:"00U1y000002SCDEEA4",parentObject:"Contact",detailField:"TravelCare Insurance",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2019-11-14 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"Diwali celebrations in Mumbai. This is a basic description.",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"},{objectId:"00U1y000002SCDDEA4",parentObject:"Contact",detailField:"Xmas Dinner",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2019-12-25 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"Xmas dinner celebrations with all my friends and family.",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#4ac076"},{objectId:"5001y0000016ibZAAQ",parentObject:"Contact",detailField:"i-GUARD Phone & Tablet Repair Plan",detailFieldLabel:"Subject",positionDateField:"CreatedDate",positionDateValue:"2020-06-08 12:08:00",objectName:"Case",fallbackTooltipField:"",fallbackTooltipValue:"",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#f2cf5b"}],  
//             show: true 
//         };
    
//     response.setHeader('Access-Control-Allow-Origin', '*');
//     response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//     response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//     response.setHeader('Access-Control-Allow-Credentials', true);
//     response.setHeader('Content-Type','text/plain;charset=UTF-8');
//     response.send(JSON.parse(JSON.stringify(jsonContent)));
//     // response.send(JSON.parse(jsonContent));
//     // response.send(jsonContent);
    
// });


// app.listen(app.get('port'), function () {
//     console.log('Express server listening on port ' + app.get('port'));
// });


var express=require("express");//导入express
var app = express();//实例化
app.set('port', process.env.PORT || 5000);
app.use(express.static("static"));//静态内容
 
app.all('*',function(req,res,next){//跨域问题
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
 
app.get("/api-endpoint",function(req,res){
    var jsonContent = { 
            imageUrl: "https://image.flaticon.com/icons/png/512/61/61456.png",
            contact: [ {id: 12345, name: "Jessie Cai111"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"},{id: 12346, name: "King King Lai"}],
            footprint: [{objectId:"00U1y000002SCDFEA4",parentObject:"Contact",detailField:"TRAVEL CLUB SIM",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2020-06-01 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is a really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"},{objectId:"00U1y000002SCDGEA4",parentObject:"Contact",detailField:"IPHONE 11",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2019-05-01 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is another really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#4ac076"},{objectId:"00U1y000002SCDHEA4",parentObject:"Contact",detailField:"SAMSUNG 55 QLED FLAT SMAR",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2020-04-07 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is the final really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"},{objectId:"00U1y000002SCDEEA4",parentObject:"Contact",detailField:"TravelCare Insurance",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2019-11-14 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"Diwali celebrations in Mumbai. This is a basic description.",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"},{objectId:"00U1y000002SCDDEA4",parentObject:"Contact",detailField:"Xmas Dinner",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2019-12-25 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"Xmas dinner celebrations with all my friends and family.",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#4ac076"},{objectId:"5001y0000016ibZAAQ",parentObject:"Contact",detailField:"i-GUARD Phone & Tablet Repair Plan",detailFieldLabel:"Subject",positionDateField:"CreatedDate",positionDateValue:"2020-06-08 12:08:00",objectName:"Case",fallbackTooltipField:"",fallbackTooltipValue:"",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#f2cf5b"}],  
            show: true 
        };
    res.send(jsonContent);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
 
 
 

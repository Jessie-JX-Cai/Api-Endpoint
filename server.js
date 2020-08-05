var express = require('express');
var bodyParser = require('body-parser');
var pg = require('pg');
var app = express();

app.set('port', process.env.PORT || 5000);
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/api-relationship-endpoint', function(request, response) {
    
    var data = {};
    var links = [{"source":1,"target":2,"type":"Master"},{"source":1,"target":3,"type":"Subsidiary"},{"source":1,"target":4,"type":"Subsidiary"},{"source":2,"target":1,"type":""},{"source":2,"target":4,"type":"Son"},{"source":2,"target":3,"type":"Husband"},{"source":2,"target":5,"type":"Home"},{"source":2,"target":6,"type":""},{"source":2,"target":7,"type":""},{"source":3,"target":1,"type":""},{"source":3,"target":2,"type":"Wife"},{"source":3,"target":5,"type":"Home"},{"source":4,"target":2,"type":"Father"},{"source":5,"target":6,"type":""},{"source":5,"target":7,"type":""}];
    var nodes = [{"id":1,"image":"/resource/1589450634000/Product","name":"cls.MUP","shape":"circularImage","type":"Product"},{"id":2,"image":"/resource/1589450634000/AvatarMan","name":"Stanley Ng","NPS":"/resource/1589450634000/NPS_Detractor_0_6","point":"6215 CP","shape":"circularImage","type":"Person"},{"id":3,"image":"/resource/1589450634000/AvatarWoman","name":"Cherry Ho","NPS":"/resource/1589450634000/NPS_Passive_7_8","point":"5000 CP","shape":"circularImage","type":"Person"},{"id":4,"image":"/resource/1589450634000/AvatarMan","name":"David Ng","NPS":"/resource/1589450634000/NPS_Promoter_9_10_r","point":"1050 CP","shape":"circularImage","type":"Person"},{"Address_Detail":"Flat A, 34/F, Li Chat Garden, 1 Lit Chit Street, Wan Chai","id":5,"image":"/resource/1589450634000/Home","name":"Wan Chai","shape":"circularImage","type":"Address"},{"id":6,"image":"/resource/1589450634000/Product","name":"Broadband","shape":"circularImage","type":"Product"},{"id":7,"image":"/resource/1589450634000/Product","name":"DEL","shape":"circularImage","type":"Product"}];
    
    data.links = links;
    data.nodes = nodes;
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Content-Type','text/plain;charset=UTF-8');
    response.send(JSON.parse(JSON.stringify(data)));
});


// call by timelineService
app.get('/api-third-endpoint', function(request, response) {
    
    //var jsonContent =[{objectId:"00U1y000002SCDGEA4",location:"Mong Kok",channel:"Retail",iconBackground:"#eb7092",parentObject:"Contact",positionDateField:"StartDateTime",positionDateValue:"2019-10-01 00:00:00",objectName:"Event",detailField:"IPHONE 11",detailFieldLabel:"Subject",fallbackTooltipField:"Description",fallbackTooltipValue:"This is another really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex...",drilldownId:"",tooltipId:"",type:"",icon:""},{objectId:"5001y0000016ibZAAQ",location:"Tsim Sha Tsui",channel:"Call center",iconBackground:"#f2cf5b",parentObject:"Contact",positionDateField:"StartDateTime",positionDateValue:"2019-12-08 12:08:00",objectName:"Case",detailField:"i-GUARD Phone & Tablet Repair Plan",detailFieldLabel:"Subject",fallbackTooltipField:"Description",fallbackTooltipValue:"i-GUARD Phone & Tablet Repair Plan Description",drilldownId:"",tooltipId:"",type:"",icon:""},{objectId:"00U1y002002SCDEEA4",location:"Chai wan",channel:"Retail",iconBackground:"#4ac076",parentObject:"Contact",positionDateField:"StartDateTime",positionDateValue:"2020-01-14 00:00:00",objectName:"Task",detailField:"TravelCare Insurance",detailFieldLabel:"Subject",fallbackTooltipField:"Description",fallbackTooltipValue:"Diwali celebrations in Mumbai. This is a basic description.",drilldownId:"",tooltipId:"",type:"",icon:""},{objectId:"00U1y003002SCDDEA4",location:"Wan Chai",channel:"Call center",iconBackground:"#eb7092",parentObject:"Contact",positionDateField:"StartDateTime",positionDateValue:"2020-03-12 00:00:00",objectName:"Event",detailField:"Xmas Dinner",detailFieldLabel:"Subject",fallbackTooltipField:"Description",fallbackTooltipValue:"Xmas dinner celebrations with all my friends and family.",drilldownId:"",tooltipId:"",type:"",icon:""},{objectId:"00U1y004002SCDHEA4",location:"Yuen Long",channel:"Retail",iconBackground:"#f2cf5b",parentObject:"Contact",positionDateField:"StartDateTime",positionDateValue:"2020-05-07 00:00:00",objectName:"Case",detailField:"SAMSUNG 55 QLED FLAT SMAR",detailFieldLabel:"Subject",fallbackTooltipField:"Description",fallbackTooltipValue:"This is the final really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...",drilldownId:"",tooltipId:"",type:"",icon:""},{objectId:"00U1y005002SCDFEA4",location:"Tin Shui Wai",channel:"Call center",iconBackground:"#4ac076",parentObject:"Contact",positionDateField:"StartDateTime",positionDateValue:"2020-06-12 00:00:00",objectName:"Task",detailField:"TRAVEL CLUB SIM",detailFieldLabel:"Subject",fallbackTooltipField:"Description",fallbackTooltipValue:"This is a really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co...",drilldownId:"",tooltipId:"",type:"",icon:""}];
    var jsonContent = [{"objectId":"00U1y000002SCDGEA4","location":"Mong Kok","channel":"Retail","iconBackground":"#eb7092","parentObject":"Contact","positionDateField":"StartDateTime","positionDateValue":"2019-10-01 00:00:00","objectName":"Event","detailField":"IPHONE 11","detailFieldLabel":"Subject","fallbackTooltipField":"Description","fallbackTooltipValue":"This is another really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex...","drilldownId":"","tooltipId":"","type":"","icon":""},{"objectId":"5001y0000016ibZAAQ","location":"Tsim Sha Tsui","channel":"Call center","iconBackground":"#f2cf5b","parentObject":"Contact","positionDateField":"StartDateTime","positionDateValue":"2019-12-08 12:08:00","objectName":"Case","detailField":"i-GUARD Phone & Tablet Repair Plan","detailFieldLabel":"Subject","fallbackTooltipField":"Description","fallbackTooltipValue":"i-GUARD Phone & Tablet Repair Plan Description","drilldownId":"","tooltipId":"","type":"","icon":""},{"objectId":"00U1y002002SCDEEA4","location":"Chai wan","channel":"Retail","iconBackground":"#4ac076","parentObject":"Contact","positionDateField":"StartDateTime","positionDateValue":"2020-01-14 00:00:00","objectName":"Task","detailField":"TravelCare Insurance","detailFieldLabel":"Subject","fallbackTooltipField":"Description","fallbackTooltipValue":"Diwali celebrations in Mumbai. This is a basic description.","drilldownId":"","tooltipId":"","type":"","icon":""},{"objectId":"00U1y003002SCDDEA4","location":"Wan Chai","channel":"Call center","iconBackground":"#eb7092","parentObject":"Contact","positionDateField":"StartDateTime","positionDateValue":"2020-03-12 00:00:00","objectName":"Event","detailField":"Xmas Dinner","detailFieldLabel":"Subject","fallbackTooltipField":"Description","fallbackTooltipValue":"Xmas dinner celebrations with all my friends and family.","drilldownId":"","tooltipId":"","type":"","icon":""},{"objectId":"00U1y004002SCDHEA4","location":"Yuen Long","channel":"Retail","iconBackground":"#f2cf5b","parentObject":"Contact","positionDateField":"StartDateTime","positionDateValue":"2020-05-07 00:00:00","objectName":"Case","detailField":"SAMSUNG 55 QLED FLAT SMAR","detailFieldLabel":"Subject","fallbackTooltipField":"Description","fallbackTooltipValue":"This is the final really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...","drilldownId":"","tooltipId":"","type":"","icon":""},{"objectId":"00U1y005002SCDFEA4","location":"Tin Shui Wai","channel":"Call center","iconBackground":"#4ac076","parentObject":"Contact","positionDateField":"StartDateTime","positionDateValue":"2020-06-12 00:00:00","objectName":"Task","detailField":"TRAVEL CLUB SIM","detailFieldLabel":"Subject","fallbackTooltipField":"Description","fallbackTooltipValue":"This is a really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co...","drilldownId":"","tooltipId":"","type":"","icon":""}];
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Content-Type','text/plain;charset=UTF-8');
    response.send(JSON.parse(JSON.stringify(jsonContent))); 
    
});


app.get('/api-types-endpoint', function(request, response) {

    var jsonContent = {data:{Task:"Tasks",Event:"Events",ContentDocumentLink:"Files | Notes",WorkOrder:"Work Orders",Case:"Cases",OpportunityContactRole:"Opportunities",CampaignMember:"Campaign Members",Asset:"Assets"}};
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Content-Type','text/plain;charset=UTF-8');
    response.send(JSON.parse(JSON.stringify(jsonContent)));
    
});

app.get('/api-endpoint', function(request, response) {    
    var jsonContent = { 
        footprint: [{objectId:"00U1y000002SCDFEA4",parentObject:"Contact",detailField:"TRAVEL CLUB SIM",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2020-06-01 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is a really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea co...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"},{objectId:"00U1y000002SCDGEA4",parentObject:"Contact",detailField:"IPHONE 11",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2019-05-01 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is another really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#4ac076"},{objectId:"00U1y000002SCDHEA4",parentObject:"Contact",detailField:"SAMSUNG 55 QLED FLAT SMAR",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2020-04-07 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"This is the final really important meeting. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ...",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"},{objectId:"00U1y000002SCDEEA4",parentObject:"Contact",detailField:"TravelCare Insurance",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2019-11-14 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"Diwali celebrations in Mumbai. This is a basic description.",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#eb7092"},{objectId:"00U1y000002SCDDEA4",parentObject:"Contact",detailField:"Xmas Dinner",detailFieldLabel:"Subject",positionDateField:"StartDateTime",positionDateValue:"2019-12-25 00:00:00",objectName:"Event",fallbackTooltipField:"Description",fallbackTooltipValue:"Xmas dinner celebrations with all my friends and family.",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#4ac076"},{objectId:"5001y0000016ibZAAQ",parentObject:"Contact",detailField:"i-GUARD Phone & Tablet Repair Plan",detailFieldLabel:"Subject",positionDateField:"CreatedDate",positionDateValue:"2020-06-08 12:08:00",objectName:"Case",fallbackTooltipField:"",fallbackTooltipValue:"",drilldownId:"",tooltipId:"",type:"",icon:"",iconBackground:"#f2cf5b"}],   
    };
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);
    response.setHeader('Content-Type','text/plain;charset=UTF-8');
    response.send(JSON.parse(JSON.stringify(jsonContent)));    
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});

 
 
 

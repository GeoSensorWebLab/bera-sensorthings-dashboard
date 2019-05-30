if (window.JST === undefined) { window.JST = {}; }
JST["datastream-card"]=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
__p+='<div id="datastream-'+
((__t=( obj["@iot.id"] ))==null?'':__t)+
'-card" class="row card">\n  <div class="col-sm-12">\n    <div class="row">\n      <div class="col-md-10 card-block">\n        <h2><a name="datastream-'+
((__t=( obj["@iot.id"] ))==null?'':__t)+
'"></a>'+
((__t=( obj.description ))==null?'':__t)+
'</h2>\n        <div class="observations-count">Loading Observations&hellip;</div>\n      </div>\n      <div class="col-md-2 card-block">\n        <h5 class="pull-right"><a href="'+
((__t=( obj["@iot.selfLink"] ))==null?'':__t)+
'">API Link</a></h5>\n      </div>\n    </div>\n    <div class="row">\n      <div class="col-md-9 card-block">\n        <div id="datastream-'+
((__t=( obj["@iot.id"] ))==null?'':__t)+
'-result"></div>\n      </div>\n\n      <div class="col-md-3 observation-statistics">\n      </div>\n    </div>\n\n    <div class="row">\n      <div class="col-sm-12">\n        <h3>\n          <button class="btn btn-secondary" type="button" data-toggle="collapse" data-target="#details-'+
((__t=( obj["@iot.id"] ))==null?'':__t)+
'" aria-expanded="false">Details</button>\n\n          <button class="btn btn-secondary pull-right download-csv" type="button">Download CSV</button>\n        </h3>\n        <div class="collapse" id="details-'+
((__t=( obj["@iot.id"] ))==null?'':__t)+
'">\n          <div class="row card card-block">\n            <div class="col-sm-4 datastream-attributes">\n              <dl>\n                <dt>Description</dt>\n                <dd>'+
((__t=( obj.description ))==null?'':__t)+
'</dd>\n\n                <dt>Unit Of Measurement</dt>\n                <dd>'+
((__t=( obj.unitOfMeasurement.name ))==null?'':__t)+
' ('+
((__t=( obj.unitOfMeasurement.symbol ))==null?'':__t)+
')</dd>\n\n                <dt>Observation Type</dt>\n                <dd>'+
((__t=( obj.observationType ))==null?'':__t)+
'</dd>\n              </dl>\n            </div>\n\n            <div class="col-sm-4 observed-property-attributes">\n            </div>\n\n            <div class="col-sm-4 sensor-attributes">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n';
return __p;
};
JST["marker-popup"]=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
__p+='<a href="/thing.html?stURL='+
((__t=(obj.stURL ))==null?'':__t)+
'&id='+
((__t=( obj["@iot.id"] ))==null?'':__t)+
'">'+
((__t=( obj.description ))==null?'':__t)+
'</a>\n';
return __p;
};
JST["observation-preview"]=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
__p+='<dl>\n  <dt>Phenomenon Time</dt>\n  <dd><time>'+
((__t=( obj.phenomenonTime ))==null?'':__t)+
'</time></dd>\n\n  <dt>Result</dt>\n  <dd>'+
((__t=( obj.result ))==null?'':__t)+
'</dd>\n</dl>\n';
return __p;
};
JST["observation-statistics"]=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
__p+='<table class="table">\n  <thead>\n    <tr>\n      <th>Stat</th>\n      <th>Value</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Last</td>\n      <td class="last-value">Loading&hellip;</td>\n    </tr>\n    <tr>\n      <td>Min</td>\n      <td class="min-value">Loading&hellip;</td>\n    </tr>\n    <tr>\n      <td>Max</td>\n      <td class="max-value">Loading&hellip;</td>\n    </tr>\n    <tr>\n      <td>Average</td>\n      <td class="average-value">Loading&hellip;</td>\n    </tr>\n  </tbody>\n</table>\n';
return __p;
};
JST["observed-property-info"]=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
__p+='<dl>\n  <dt>Property</dt>\n  <dd>'+
((__t=( obj.name ))==null?'':__t)+
'</dd>\n\n  <dt>Property Description</dt>\n  <dd>'+
((__t=( obj.description ))==null?'':__t)+
'</dd>\n</dl>\n';
return __p;
};
JST["sensor-info"]=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
__p+='<dl>\n  <dt>Sensor Description</dt>\n  <dd>'+
((__t=( obj.description ))==null?'':__t)+
'</dd>\n</dl>\n';
return __p;
};
JST["thing-info"]=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
__p+='<div class="row">\n  <div class="col-md-10">\n    <dl>\n      <dt>ID</dt>\n      <dd>'+
((__t=( obj["@iot.id"] ))==null?'':__t)+
'</dd>\n\n      <dt>Location Description</dt>\n      <dd>'+
((__t=( obj.locationDescription ))==null?'':__t)+
'</dd>\n\n      <dt>Properties</dt>\n      <dd>\n    <pre>\n    '+
((__t=( JSON.stringify(obj.properties, null, "  ") ))==null?'':__t)+
'\n    </pre>\n      </dd>\n    </dl>\n  </div>\n  <div class="col-md-2">\n    <h5 class="pull-right"><a href="'+
((__t=( obj["@iot.selfLink"] ))==null?'':__t)+
'">API Link</a></h5>\n  </div>\n</div>\n';
return __p;
};
JST["thing-list-item"]=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
__p+='<li class="row list-group-item" data-id="'+
((__t=( obj["@iot.id"] ))==null?'':__t)+
'">\n  <div class="col-sm-8">\n    <p>\n      <a href="/thing.html?stURL='+
((__t=(obj.stURL ))==null?'':__t)+
'&id='+
((__t=( obj["@iot.id"] ))==null?'':__t)+
'">'+
((__t=( obj.description ))==null?'':__t)+
'</a>\n    </p>\n  </div>\n  <div class="col-sm-4">\n    <p class="small">'+
((__t=( obj.datastreamsCount ))==null?'':__t)+
' '+
((__t=( obj.pluralize("Stream", obj.datastreamsCount) ))==null?'':__t)+
'</p>\n  </div>\n</li>\n';
return __p;
};
JST["time-range-picker"]=function(obj){
var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
__p+='<div class="row">\n  <div class="col-sm-3 card-block">\n    <h4>Time Range</h4>\n  </div>\n\n  <div class="col-sm-9 card-block">\n    <h5 class="pull-xs-right">\n      <a><time class="start-date">May 1 2016 00:00:00 UTC</time>&nbsp;<i class="fa fa-calendar"></i></a>\n      <wbr>&nbsp;to&nbsp;<wbr>\n      <a><time class="end-date">May 2 2016 00:00:00 UTC</time>&nbsp;<i class="fa fa-calendar"></i></a>\n    </h5>\n  </div>\n</div>\n\n<div class="row time-range-picker-controls">\n  <div class="col-sm-6">\n    <h6>Quick Select a Time Range</h6>\n\n    <p><button class="btn btn-sm set-past-hour">Past Hour</button></p>\n\n    <p><button class="btn btn-sm set-past-day">Past Day</button></p>\n\n    <p><button class="btn btn-sm set-past-week">Past Week</button></p>\n\n    <p><button class="btn btn-sm set-past-month">Past Month</button></p>\n  </div>\n  <div class="col-sm-6">\n    <p>\n      <label>Start Date</label>\n      <input class="form-control start-date-control" type="datetime">\n    </p>\n\n    <p>\n      <label>End Date</label>\n      <input class="form-control end-date-control" type="datetime">\n    </p>\n\n    <p>\n      <button class="btn btn-primary apply-time-range">Apply</button>\n    </p>\n  </div>\n</div>\n\n<div class="row">\n  <div class="col-sm-12 notifier">\n    <div class="alert alert-danger error"></div>\n    <div class="alert alert-success success"></div>\n    <div class="alert alert-warning warning"></div>\n  </div>\n</div>\n';
return __p;
};

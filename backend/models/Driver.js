// const module = require('doraemon/lib/module');
const mongoose=require('mongoose')
const Driver=mongoose.Schema(
{
  "_id": {
    "type": "ObjectId"
  },
  "driver_id": {
    "type": "String"
  },
  "name": {
    "type": "String"
  },
  "contact_number": {
    "type": "String"
  },
  "availability_status": {
    "type": "Boolean"
  },
  "assigned_trip_id": {
    "type": "String",
    "nullable": true
  },
  "last_updated": {
    "type": "Date"
  },
  "service_area": {
    "type": "String"
  },
  "rating": {
    "type": "Number"
  },
  "shift_timings": {
    "type": "String"
  }
});
module.epxorts=Driver;

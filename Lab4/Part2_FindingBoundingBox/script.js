function findTopLeft(pointList) { // Max Lat and Min Lon
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => {
            if (maxLat == null) {  // first point
                maxLat = point.lat
                minLon = point.lon
             }
             else {
                  if (point.lat > maxLat){  // max lat
                       maxLat = point.lat
                  }
                  if (point.lon < minLon){  // min lon
                      minLon = point.lon
                  }
             }
          }
          )

     return {"pointId": 1, "lat": maxLat, "lon": minLon}
     }

 
function findTopRight(pointList) { // Max Lat and Min Lon
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => {
            if (maxLat == null) {  // first point
                maxLat = point.lat
                minLon = point.lon
             }
             else {
                  if (point.lat > maxLat){  // max lat
                       maxLat = point.lat
                  }
                  if (point.lon > minLon){  // min lon
                      minLon = point.lon
                  }
             }
          }
          )

     return {"pointId": 2, "lat": maxLat, "lon": minLon}
     }

function findBottomLeft(pointList) { // Max Lat and Min Lon
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => {
            if (maxLat == null) {  // first point
                maxLat = point.lat
                minLon = point.lon
             }
             else {
                  if (point.lat < maxLat){  // max lat
                       maxLat = point.lat
                  }
                  if (point.lon < minLon){  // min lon
                      minLon = point.lon
                  }
             }
          }
          )

     return {"pointId": 3, "lat": maxLat, "lon": minLon}
     }

function findBottomRight(pointList) { // Max Lat and Min Lon
    var maxLat = null;
    var minLon = null;

    pointList.data.forEach(
        point => {
            if (maxLat == null) {  // first point
                maxLat = point.lat
                minLon = point.lon
             }
             else {
                  if (point.lat < maxLat){  // max lat
                       maxLat = point.lat
                  }
                  if (point.lon > minLon){  // min lon
                      minLon = point.lon
                  }
             }
          }
          )

     return {"pointId": 4, "lat": maxLat, "lon": minLon}
     }

function Run() {
// get the corners by creating functions which select an item from the data which has the correct values
var topLeftPoint = findTopLeft(theJSON);
var topRightPoint = findTopRight(theJSON);
var bottomLeftPoint = findBottomLeft(theJSON);
var bottomRightPoint = findBottomRight(theJSON);

var boundingBox = {
    topLeft: topLeftPoint,
    topRight: topRightPoint,
    bottomLeft: bottomLeftPoint,
    bottomRight: bottomRightPoint
}

console.log("Bounding box computed for medl-1269@tamu.edu: ");
console.log(boundingBox);
}
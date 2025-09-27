addressLat = 10;
addressLong = 30;
positionLat = 20;
positionLong = 40;

let d = (((positionLat - addressLat)**2) + ((positionLong - addressLong)**2))**1/2
console.log(d)

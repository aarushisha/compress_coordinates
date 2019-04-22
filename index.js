//using LZ compression because it is a lossless data compression
const LZString = require('lz-string');

//input is in degree decimals
const compression = (lat, long) => {
  //check to make sure valid entry for lat/long
  if (typeof lat !== 'number' && typeof long !== 'number') {
  	return 'invalid type';
  }
  if (lat > 90 || lat < -90 || long > 180 || long < -180) {
  	return 'invalid latitude & longitude';
  }
  const coordinates = `${lat},${long}`;
  const compressed = LZString.compressToUTF16(coordinates);


  //to get back original entries
  const originalString = LZString.decompressFromUTF16(compressed);
  const originalLat = originalString.split(',')[0];
  const originalLong = originalString.split(',')[1];


 //return the compressed string
  return compressed;

}

//example
console.log(compression(37.7904267,-122.4060113));
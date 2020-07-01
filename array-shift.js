function panggilShift() {
  var kota=['jakarta','bogor','depok','tangerang','bekasi'];
  console.log(kota);
  console.log("============");

  kota2 = kota.shift();
  console.log(kota2);
  
  return kota;
}

console.log(panggilShift());

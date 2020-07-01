function panggilSplice() {
  var data = ['satu','dua','tiga','empat'];
  console.log(data[0]);
  data.splice(2,0,"palembang")
  return data;
}

console.log(panggilSplice());

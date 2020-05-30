function konversiMenit(menit){
  var jam = Math.floor(menit/60)
  var menit2 = menit%60
  var mm = menit2.toString()
  
  if (mm.length < 2){
    return jam + ':0' + mm
  }else{
    return jam + ':' +mm
  }
  
  
  }

console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53));
console.log(konversiMenit(88)); 
console.log(konversiMenit(120));

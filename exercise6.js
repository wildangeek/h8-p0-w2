//No 1

console.log('LOOPING PERTAMA');
var a =2;
while(a<=20){
  console.log(a+ ' - I love Coding');
  a+=2;
}
console.log('LOOPING KEDUA');
var b = 20;
while(b >=2){
  console.log(b+' - I Will Become Full Stack Developer');
  b-=2;
}

// No 2

console.log('LOOPING PERTAMA');
for(var a =1; a<=20; a++){
  console.log(a+ ' - I Love Coding');
}

console.log('LOOPING KEDUA')
for(var b =20; b>=1; b--){
  console.log(b+ ' - I Will Become Full Stack Developer');
}

// No 3 Bagian 1 & 2

for (var a =1; a<=100; a++){
  if (a%2==0){
    console.log('GENAP');
  }else{
    console.log('GANJIL');
  }
}

// No 3 Bagian 3 & 4

for (var b=1; b<=100; b+=2){
  if(b%3==0){
    console.log(b+ ' Kelipatan 3');
  }else{
    console.log('');
  }
}

for (var c =1; c<=100; c+=5){
  if(c%6==0){
    console.log(c+ ' Kelipatan 6');
  }else{
    console.log('');
  }
}

for (var d =1; d<=100;d+=9){
  if(d%10==0){
    console.log(d+ ' Kelipatan 10');
  }else{
    console.log('');
  }
}

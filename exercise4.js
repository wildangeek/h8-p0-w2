var tanggal = 8;
var bulan = 13;
var tahun = 1995;
if (bulan <13){
  switch(bulan){
    case 1:
      bulan ='januari';
      break;
      case 2:
      bulan ='februari';
      break;
      case 3:
      bulan ='maret';
      break;
      case 4:
      bulan ='arpil';
      break;
      case 5:
      bulan ='mei';
      break;
      case 6:
      bulan ='juni';
      break;
      case 7:
      bulan ='juli';
      break;
      case 8:
      bulan ='agustus';
      break;
      case 9:
      bulan ='september';
      break;
      case 10:
      bulan ='oktober';
      break;
      case 11:
      bulan ='november';
      break;
      case 12:
      bulan ='desember';
      break;      
  }
}else{
  bulan = ', Bulanya salah!'
}
if(tanggal <32 && tahun <=2200){
  console.log('Tanggalnya: '+ tanggal + bulan + ', Tahunya: '+ tahun)
}else{
  console.log('Tanggal Salah')
}

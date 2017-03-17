var s=[
"https://goo.gl/GxBLxD",
"https://goo.gl/3F1Hyd",
"https://goo.gl/XaIejV",
"https://goo.gl/UmfEbV",
"https://goo.gl/DUwbxD",
"https://goo.gl/RxiwQQ",
"https://goo.gl/qIDdPq",
"https://goo.gl/Em9Iax",
"https://goo.gl/4TlufG",
"http://goldcoinjar.com/?r=mounir.ana.ma@gmail.com",
"https://www.satoshininja.com/?r=mounir.ana.ma@gmail.com",
"https://www.grifodebitcoin.com/?r=mounir.ana.ma@gmail.com",
"http://www.junebitcoin.com/?r=mounir.ana.ma@gmail.com",
"https://www.grifodebitcoin.com/?r=mounir.ana.ma@gmail.com",
"http://freebtc.kz/?r=mounir.ana.ma@gmail.com",
"https://www.freebitcoindaily.net/?r=mounir.ana.ma@gmail.com",
"http://www.movilbits.com/reclamar/?r=mounir.ana.ma@gmail.com",
"http://www.ganabitsdiarios.com/?r=mounir.ana.ma@gmail.com",
"http://www.plowbitcoin.club/r=mounir.ana.ma@gmail.com",
"http://www.nuclearbit.club/r=mounir.ana.ma@gmail.com",
"http://www.plutonbit.club/r=mounir.ana.ma@gmail.com",
"http://www.poseidonbit.club/r=mounir.ana.ma@gmail.com",
"http://www.lightbit.club/r=mounir.ana.ma@gmail.com",
"http://www.kingbitcoin.club/r=mounir.ana.ma@gmail.com",
"http://www.athenafaucet.com/r=mounir.ana.ma@gmail.com",
"http://www.zeusfaucet.com/r=mounir.ana.ma@gmail.com",
"http://www.taurusfaucet.com/r=mounir.ana.ma@gmail.com",
"http://www.ariesfaucet.com/r=mounir.ana.ma@gmail.com",
"http://www.sunbitcoin.club/r=mounir.ana.ma@gmail.com",
"http://www.junebitcoin.com/r=mounir.ana.ma@gmail.com",

];
var adr,i,x=0,c=s.length;
function address() {
adr=prompt('Enter your bitcoin address:');
s=s.map(function(x){
  return x.indexOf("a=") != -1 ? x + adr : x; 
});
}
function next(){
x+=1;
if (x>c-1)
  {
  x=0;
  }
changeSrc();
}
function prev(){
x-=1;
if (x<=0)
  {
  x=c-1;
  }
changeSrc();
}
function jumpTo() {
i=prompt("Enter a number to skip to that faucet.");
x=0;
while (i!=x) {
  if (x>c-2) {
  break;
  }
  x+=1;
}
changeSrc();
}
function newTab() {
var win=window.open(document.getElementById("fm").src, '_blank');
win.focus();
}
function changeSrc() {
document.getElementById("fm").src=s[x];
}

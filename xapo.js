var s=[
"http://goldcoinjar.com/?r=mounir.ana.ma@gmail.com",
"http://www.betasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.alfasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.chisatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.deltasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.epsilonsatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.etasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.gammasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.iotasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.ipsilonsatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.kappasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.lambdasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.musatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.omegasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.omicronsatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.phisatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.pisatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.psisatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.rhosatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.tausatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.sigmasatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.xisatoshi.us/?r=mounir.ana.ma@gmail.com",
"http://www.zeusfaucet.com/?r=mounir.ana.ma@gmail.com",
"http://www.athenafaucet.com/?r=mounir.ana.ma@gmail.com",
"http://www.taurusfaucet.com/?r=mounir.ana.ma@gmail.com",
"http://www.taurusfaucet.com/?r=mounir.ana.ma@gmail.com",
"http://www.ariesfaucet.com/?r=mounir.ana.ma@gmail.com",
"http://www.coffefaucet.com/?r=mounir.ana.ma@gmail.com",
"http://xapobits.cf/?r=mounir.ana.ma@gmail.com",
"https://www.satoshininja.com/?r=mounir.ana.ma@gmail.com",
"https://www.grifodebitcoin.com/?r=mounir.ana.ma@gmail.com",
"http://www.storesxbox.es/faucet/?r=mounir.ana.ma@gmail.com",
"http://xapobtc.com/?r=mounir.ana.ma@gmail.com",
"http://www.onoxvo.es/faucet/?r=mounir.ana.ma@gmail.com",
"http://freebtc.kz/?r=mounir.ana.ma@gmail.com",
"http://gentlebitcoin.eu/?r=mounir.ana.ma@gmail.com",
"http://goldcoinjar.com/?r=mounir.ana.ma@gmail.com",
"https://www.satoshininja.com/?r=mounir.ana.ma@gmail.com",
"https://www.grifodebitcoin.com/?r=mounir.ana.ma@gmail.com",
"http://www.junebitcoin.com/?r=mounir.ana.ma@gmail.com",
"https://www.grifodebitcoin.com/?r=mounir.ana.ma@gmail.com",
"http://freebtc.kz/?r=mounir.ana.ma@gmail.com",
"https://www.freebitcoindaily.net/?r=mounir.ana.ma@gmail.com",
"http://www.movilbits.com/reclamar/?r=mounir.ana.ma@gmail.com",
"http://www.ganabitsdiarios.com/?r=mounir.ana.ma@gmail.com",
"http://www.plowbitcoin.club/?r=mounir.ana.ma@gmail.com",
"http://www.nuclearbit.club/?r=mounir.ana.ma@gmail.com",
"http://www.plutonbit.club/?r=mounir.ana.ma@gmail.com",
"http://www.poseidonbit.club/?r=mounir.ana.ma@gmail.com",
"http://www.lightbit.club/?r=mounir.ana.ma@gmail.com",
"http://www.kingbitcoin.club/?r=mounir.ana.ma@gmail.com",
"http://www.athenafaucet.com/?r=mounir.ana.ma@gmail.com",
"http://www.zeusfaucet.com/?r=mounir.ana.ma@gmail.com",
"http://www.taurusfaucet.com/?r=mounir.ana.ma@gmail.com",
"www.ariesfaucet.com/?r=mounir.ana.ma@gmail.com",
"http://www.sunbitcoin.club/?r=mounir.ana.ma@gmail.com",
"http://www.junebitcoin.com/?r=mounir.ana.ma@gmail.com",
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

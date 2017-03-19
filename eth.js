var s=[
"https://www.forumcoin.win/ether/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://ethereum-faucet.org/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://ethereum.cryptocrawl.in/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://www.infiniteth.net.ve/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"https://bitcforex.com/faucet/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://ethereum.cryptocrawl.in/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://www.faucether.com/index.php?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"https://www.ethereumfaucet.win/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://eth-faucet.net/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://www.ethereumfaucet.net/index.php?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://hardrockfaucet.club/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://www.faucether.org/index.php?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"https://www.etherfaucet.win/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://www.faucether.net/index.php?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://etherum.crypto-cap.com/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://allbtc.ru/ethereum/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://eudirect.co.uk/ether/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://www.eth-faucet.net/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://eth-ereum.info/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"https://freeethereum.xyz/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://eth-ereum.info/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://ether.input.space/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://eth.bitganancias.com/faucet/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://freeethereum.pw/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://ethereum.awinvestmentcenter.com/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://ethplus.bitganancias.com/faucet/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://ether.btcsite.ru/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://www.get-ether.com/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"https://www.ethereumfaucet.win/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://cryptsat.com/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://coinclix.com/ether/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"https://freeeth.me/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://eudirect.co.uk/ether/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://eth-kran.pw/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://ethereumfree.pw/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",
"http://www.etherfaucet.net/?r=0x4814Ae3aD419ef704A4896c89F5e8BfB977C114a",

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

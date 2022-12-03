<!-- Begin
rnd.today=new Date();
rnd.seed=rnd.today.getTime();

function rnd() {
rnd.seed = (rnd.seed*9301+49297) % 233280;
return rnd.seed/(233280.0);
};

function rand(number) {
var result = Math.ceil(rnd()*number);
if (!result)result++;
return result
};
var ad_cnt1 = 1;
var ad1 = rand(ad_cnt1);
var link1;
var adBanner1;
var width1
var height1
if (ad1==1) {
link1="https://shope.ee/5KcLVMf4IX";
adBanner1="https://blogger.googleusercontent.com/img/a/AVvXsEhkNxt7_8Nd52rXKNVcdpeRf7GtyyomRvhGRg-KVJWJiGxGF30qIIpssvI6qW6yS-EP-uVjplyX5Hx1cwfWtYzwyCwTOHCvt1Wms30-rOJ2W4H20u5E9vd92kEFpK8Rx6v4gj8xUzpNRhQ3-G3BnlrBOXP7GIAxLdP64VgRYuJWXpWHkV1Rh9i5JnXy=s16000";
width1="728";
height1="90";
alt1="beli sepatu di shopee";
}

document.write('<center><a href="' + link1 + '" target="_blank">');
document.write('<img src="' + adBanner1 + '" width=' + width1 + ' height=' + height1 + ' border=0 alt="' + alt1 + '"></a>');
document.write('</center>');
// End -->

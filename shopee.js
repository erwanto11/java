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
var ad_cnt1 = 4;
var ad1 = rand(ad_cnt1);
var link1;
var adBanner1;
var width1
var height1
if (ad1==1) {
link1="http://url.klikdana.com/co_cc";
adBanner1="http://lh5.ggpht.com/_AkJDIL5uAFo/S8qwr-HfNTI/AAAAAAAAAoM/VCaH-NxoXwo/cocc468_60a.gif";
width1="468";
height1="60";
alt1="Free Domain CO.CC";
}
if (ad1==2) {
link1="http://url.klikdana.com/music_adv";
adBanner1="http://lh5.ggpht.com/_AkJDIL5uAFo/S8qrw72bViI/AAAAAAAAAng/wLQ0lA_9rm4/freedownloadmp3.gif";
width1="468";
height1="60";
alt1="Free Download MP3";
}
if (ad1==3) {
link1="http://url.klikdana.com/music_adv";
adBanner1="http://lh3.ggpht.com/_AkJDIL5uAFo/S8qrwgPqqYI/AAAAAAAAAnc/BUofh6dT2vM/learn_music.gif";
width1="468";
height1="60";
alt1="Learn Music";
}
if (ad1==4) {
link1="http://url.klikdana.com/aafb";
adBanner1="http://lh3.ggpht.com/_AkJDIL5uAFo/S8qwoUqzpzI/AAAAAAAAAoI/nNed2W_3ZlQ/468x60facebook.gif";
width1="468";
height1="60";
alt1="Facebook Marketing";
}
document.write('<center><a href="' + link1 + '" target="_blank">');
document.write('<img src="' + adBanner1 + '" width=' + width1 + ' height=' + height1 + ' border=0 alt="' + alt1 + '"></a>');
document.write('</center>');
// End -->

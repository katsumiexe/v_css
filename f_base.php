<?
function kigaku($n){
	$ks=array("","一白水星","二黒土星","三碧木星","四緑木星","五黄土星","六白金星","七赤金星","八白土星","九紫火星");
	$tmp=floor(($n-204)/10000);

	$tmp2=9-($tmp-1910) % 9;

	return $ks[$tmp2]."■".$tmp2."★";
}
?>

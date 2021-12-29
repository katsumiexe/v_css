<?
function kigaku($n){
	$ks=array("","一白水星","二黒土星","三碧木星","四緑木星","五黄土星","六白金星","七赤金星","八白土星","九紫火星");
	$tmp=floor(($n-204)/10000);
	$tmp2=9-($tmp-1910) % 9;
    return array($ks[$tmp2], $tmp2);

}

function suuhi($n){
	$cnt=6;
	for($t=0;$t<8;$t++){
		$cnt+=substr($n,$t,1);
echo $cnt;

	}
/*	
	if($cnt == 11 || $cnt == 22 || $cnt<10){
		return $cnt;

	}else{
		$cnt2=substr($cnt,0,1)+substr($cnt,1,1);
		return $cnt2;
	}
*/
		$cnt2=substr($cnt,0,1)+substr($cnt,1,1);
		return $cnt2;

}


function horo($n){
	$ks=array("牡羊座","牡牛座","双子座","蟹座","獅子座","乙女座","天秤座","蠍座","射手座","山羊座","水瓶座","魚座");
	$day=substr($n,4,4)+0;

	if($day<121 || $day>1221){
		$h=9;
	
	}elseif($day<220){
		$h=10;

	}elseif($day<321){
		$h=11;

	}elseif($day<421){
		$h=0;

	}elseif($day<522){
		$h=1;

	}elseif($day<623){
		$h=2;

	}elseif($day<724){
		$h=3;

	}elseif($day<824){
		$h=4;

	}elseif($day<924){
		$h=5;

	}elseif($day<1024){
		$h=6;

	}elseif($day<1123){
		$h=7;

	}elseif($day<1222){
		$h=8;
	}
	return $h;
}

?>

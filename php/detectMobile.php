<?php  
	require_once 'Mobile_Detect.php';
	$detect = new Mobile_Detect;
	 
	// Any mobile device (phones or tablets).
	if ($detect->isMobile() ) {
		print 1; 
	}else{
		print 0;
	}
?>
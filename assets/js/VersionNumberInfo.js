/*
 *	Objects
*/
 function VersionInfo() {

	// Populate via JS in the browser
	this.userAgent = navigator.userAgent;
	
	// parser = UserAgentParser.parse(navigator.userAgent);
	this.browser = BrowserDetect.browser; //parser.browser.name;
	this.browserVersion = BrowserDetect.version; // parser.browser.version;
	this.browserLocale = "";//parser.browser.locale;
	this.browserHeight = $(window).height();
	this.browserWidth = $(window).width(); 
	
	this.deviceColorDepth = window.screen.colorDepth;
	this.deviceHeight = window.screen.height;
	this.deviceWidth = window.screen.width;
	
	this.os = BrowserDetect.OS; // parser.os.name;
	// this.osVersion = parser.os.version;
	
	this.flashInstalled = FlashDetect.installed;
	this.flashVersion = FlashDetect.major + "." + FlashDetect.minor + "." + FlashDetect.revision;
	
	this.silverlightInstalled = Silverlight.isInstalled;
	this.silverlightVersion = GetSilverlightVersion();
	
	// Populated via the server
	this.requestIpAddress = myIP(); 
	this.requestReferrer = document.referrer; 
	
	//
	// Set the values in to category lists
	//
	/*
	this.httpRequestInfo = {
		"User Agent" : this.userAgent,
		"Request IP Address" : this.requestIpAddress,
		"Request Referrer" : this.requestReferrer
	};

	this.browserInfo = {
		"Browser" : this.browser,
		"Browser Version" : this.browserVersion,
		//"Browser Locale" : this.browserLocale
		"Height" : this.browserHeight,
		"Width" : this.width
	};
	
	this.flashInfo = {
		"Flash Version" : this.flashVersion
	};
	
	this.silverlightInfo = {
		"Silverlight Version" : this.silverlightVersion
	};
	
	this.osInfo = {
		"Operating System" : this.os	
	};
	
	this.deviceInfo = {
		"Color Depth" : this.deviceColorDepth,
		"Height" : this.deviceHeight,
		"Width" : this.deviceWidth
	};
	*/
}

function myIP() {
	try {
	    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
	    else xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	    xmlhttp.open("GET","http://api.hostip.info/get_html.php",false);
	    xmlhttp.send();

	    hostipInfo = xmlhttp.responseText.split("\n");

	    for (i=0; hostipInfo.length >= i; i++) {
	        ipAddress = hostipInfo[i].split(":");
	        if ( ipAddress[0] == "IP" ) return ipAddress[1];
	    }

	    return false;
	} catch (Error)
	{
		console.log(Error);
		return "<span class=\"label label-warning\">Unable to detect</span>";
	}
}

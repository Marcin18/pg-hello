function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
            'Device Model   : ' + device.model + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}

function clickMe(){
	info = "Twoja godnosc to Marcin Stanuch" + '\n';
	navigator.notification.alert(info);
}

function internetConnect() {
    let preloadVideo = true;
    var connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
        if (connection.effectiveType === 'cellular') {
            preloadVideo = false;
            info = 'Jest internet' + '\n';
            navigator.notification.alert(info);
        }
        else{
            info = 'Nie ma internetu' + '\n';
            navigator.notification.alert(info);
        }
    }
}
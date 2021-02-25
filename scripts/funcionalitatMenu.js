var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion);
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;
var OSName="Unknown OS";

// En opera la versio es despres de opera o de version.
if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
    browserName = "Opera";
    fullVersion = nAgt.substring(verOffset+6);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
        fullVersion = nAgt.substring(verOffset+8);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
    browserName = "Microsoft Internet Explorer";
    fullVersion = nAgt.substring(verOffset+5);
}
// la versio en chrome es despres de chrome.
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
    browserName = "Chrome";
    fullVersion = nAgt.substring(verOffset+7);
}
// en safari la versio es troba despres de version.
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
    browserName = "Safari";
    fullVersion = nAgt.substring(verOffset+7);
    if ((verOffset=nAgt.indexOf("Version"))!=-1)
        fullVersion = nAgt.substring(verOffset+8);
}
// a Firefox la veriso es troba just despres de Firefox
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
    browserName = "Firefox";
    fullVersion = nAgt.substring(verOffset+8);
}
//averiguem quin sistema operatiu utilitzem
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";



function funcioInfo() {
    alert("Nom del navegador:  "+navigator.appName+ "\n"
        +"Versió del navegador:  "+navigator.userAgent + "\n"
        +"Sistema operatiu utlitzat:  "+OSName + "\n"
        +"Darrera actulització del document: "+ document.lastModified + "\n"
        +"Idioma: "+navigator.language+ "\n"
        +"Informació del hostname: "+window.location.protocol+ ", "
        +window.location.host +", "+ window.location.origin+ ", "+ window.location.pathname);
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    console.log("estem a la funcio del open nav");
}

function closeNav() {
    console.log("estem a la funcio del close nAV");
    document.getElementById("mySidenav").style.width = "0";
}
function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
    console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string.toLowerCase());
}
function sayHiToGrandma(string) {
    var hearingAid = "I can't hear you!";
    var loud = "YES INDEED!";
    var love = "I love you, too.";

   if (string.toLowerCase(string) === string) {
   return hearingAid;
   }
    else if (string.toUpperCase(string) === string) {
    return loud;
    }
    else if ("I love you, Grandma." === string) {
        return love;
    }
}
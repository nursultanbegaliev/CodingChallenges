/* 
url = "https://www.codewars.com/kata/551dc350bf4e526099000ae5";

Examples
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
  // =>  WE ARE THE CHAMPIONS MY FRIEND
*/

function songDecoder(song){
  return song.split('WUB').join(' ').toString().trim().split(/\s+/).join(' ');
}


function songDecoder2(song){
  return song.replace(/(WUB)+/g," ").trim()
}
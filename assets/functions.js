var data = {membership: []}
function removeLoader(){
$( "#loadingDiv" ).fadeOut(500, function() {
$( "#loadingDiv" ).remove();
});  
}
const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

function sendto(url = "/"){
window.location.replace(url);
}
function loadServersData(){
if(!fetched) return;
var el = document.getElementById("serversbutton");
if(el.className === "sidenav-select sidenav-selected") return;

changebyClass("sidenav-select sidenav-selected" , "sidenav-select" , "className")
changeURL("/dashboard" , "StaffRanks Dashboard")
var el = document.getElementById("serversbutton");
el.className = "sidenav-select sidenav-selected"

var title = document.getElementById("titleofpage");
title.innerText = "My Servers"

removeallcards()
fetch(('/api/v1/groups/' + localStorage.getItem('cookie')) , { headers: { 'authorization': localStorage.getItem('token') }, referrerPolicy: "no-referrer"}).then(res => res.json()).then(guilds =>{

let servers = guilds

for(let ser of servers){
addServer(ser)
}
})
}
const fileTypes = [
  "image/gif",
  "image/jpeg",
  "image/png",
  "image/webp",
];
let arrayofstatus = [`PLAYING`, `STREAMING` , `LISTENING` , `WATCHING` , `CUSTOM` , `COMPETING`]
function changeURL(nextURL = "/" , title="StaffRanks" , nextState= { additionalInformation: 'Updated the URL with JS' }){
window.history.pushState(nextState, title, nextURL);
}



const get_invite_url = (botID , invite_code) => encodeURI(`https://discord.com/api/oauth2/authorize?client_id=${botID}&permissions=0&redirect_uri=https://staff-ranks-bot.glitch.me/premium/callback&response_type=code&scope=bot&state=${invite_code}`)

function changebyClass(name , value , aa = "innerText") {
  var el = document.getElementsByClassName(name);
  for (var i = 0; i < el.length; i++) {
    el[i][aa] = value;
  } 

}
function removeallcards() {
document.querySelectorAll('.premiumCards').forEach(e => e.remove());
document.querySelectorAll('.servers').forEach(e => e.remove());
document.querySelectorAll('.inputTitle').forEach(e => e.remove());
document.querySelectorAll('.claimPremium').forEach(e => e.remove());
document.querySelectorAll('.h-captcha').forEach(e => e.remove());
document.querySelectorAll('.settingsDiv').forEach(e => e.remove());
document.querySelectorAll('.settingsCard').forEach(e => e.remove());
document.querySelectorAll('.backgroundCard').forEach(e => e.remove());
document.querySelectorAll('.backgroundImage').forEach(e => e.remove()); 
document.querySelectorAll('.backgroundBgDiv').forEach(e => e.remove());
}


function closepremiumpage(){
document.querySelectorAll('.settingsDiv').forEach(e => e.remove());
document.querySelectorAll('.settingsCard').forEach(e => e.remove());
}

function chooseAvatar() {
var el = document.getElementById("profile_avatar")
if(!el) return;
el.click();
}


function clickonpremium(data){
document.querySelectorAll('.settingsDiv').forEach(e => e.remove());
document.querySelectorAll('.settingsCard').forEach(e => e.remove());

let user = data
let status = data.botStatus

let updateData = {

}
user.avatarURL = "https://cdn.discordapp.com/attachments/729466154082631750/829122361554501642/d3b854fb5b8c3c2d4c9f3a7306ad9376.png"

var settingsDiv = document.createElement("div");
settingsDiv.className = "settingsDiv"

var settingsTitle = document.createElement("h1");
settingsTitle.className = "settingsTitle"
settingsTitle.textContent = "Bot Settings"
  
var settingsCard = document.createElement("div");
settingsCard.className = "settingsCard"
settingsCard.insertAdjacentHTML("beforeend",'<svg onclick="closepremiumpage()" class="settingsCard-exit" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18" ><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>')
   
var settingsPhotoInput = document.createElement("input");
settingsPhotoInput.type = "file"
settingsPhotoInput.id = "profile_avatar"
settingsPhotoInput.setAttribute("accept" , ".jpg, .jpeg, .png, .gif, .webp")
settingsPhotoInput.setAttribute("style" , "display:none;")

var settingsOfUser = document.createElement("div");
settingsOfUser.className = "settingsOfUser"
  
var settingsIconTitle = document.createElement("h1");
settingsIconTitle.innerText = "ICON"
settingsIconTitle.className = "settingsIconTitle"
  
var settingsAvatarContainer = document.createElement("div");
settingsAvatarContainer.className = "settingsAvatarContainer"

var settingsAvatarChange = document.createElement("img");
settingsAvatarChange.className = "settingsAvatarChange"
settingsAvatarChange.src = "https://cdn.discordapp.com/attachments/729466154082631750/829817400975163422/ht.PNG"

var settingsAvatar = document.createElement("img");
settingsAvatar.className = "settingsAvatar"
settingsAvatar.src = "https://cdn.discordapp.com/attachments/729466154082631750/829122361554501642/d3b854fb5b8c3c2d4c9f3a7306ad9376.png"
settingsAvatar.onclick = function() { chooseAvatar() }

settingsPhotoInput.addEventListener("change", async function(event) {

var files = settingsPhotoInput.files;
if(!files[0]) return updateData.avatar = undefined;

let file = files[0]
if(!fileTypes.includes(file.type)) return updateData.avatar = undefined;

let image_base64 = await toBase64(file)
settingsAvatar.src = image_base64
updateData.avatar = image_base64
})

var settingsAvatarRemove = document.createElement("h1")
settingsAvatarRemove.className = "settingsAvatarRemove"
settingsAvatarRemove.innerText = "Remove"
settingsAvatarRemove.onclick = function() {
settingsAvatar.src = "https://cdn.discordapp.com/attachments/729466154082631750/829122361554501642/d3b854fb5b8c3c2d4c9f3a7306ad9376.png"
updateData.avatar = null;
 }

var settingsAvatarOverlay = document.createElement("div");
settingsAvatarOverlay.className = "settingsAvatarOverlay"
settingsAvatarOverlay.onclick = function() { chooseAvatar() }

var settingsAvatarOverlayText = document.createElement("div");
settingsAvatarOverlayText.className = "settingsAvatarOverlayText"
settingsAvatarOverlayText.innerText = "Select"
  
var settingsAvatarOverlayText2 = document.createElement("div");
settingsAvatarOverlayText2.className = "settingsAvatarOverlayText2"
settingsAvatarOverlayText2.innerText = "Image"
  
var settingsUsernameTitle = document.createElement("h1");
settingsUsernameTitle.innerText = "Group ID"
settingsUsernameTitle.className = "settingsUsernameTitle"
  
var settingsInput = document.createElement("input");
settingsInput.className = "settingsInput"
settingsInput.type = "text"
settingsInput.id = "settingsInput"
settingsInput.value = `${user.group}`
  
var settingsLabel = document.createElement("label");
settingsLabel.htmlFor = "settingsInput"
settingsLabel.className = "settingsLabel"
settingsLabel.textContent = `#${user._id}`



var settingsInviteCodeTitle = document.createElement("h1");
settingsInviteCodeTitle.className = "settingsInviteCodeTitle"
settingsInviteCodeTitle.innerText = "INVITE"
  
var settingsInviteCodeDiv = document.createElement("div") 
settingsInviteCodeDiv.className = "settingsInviteCodeDiv"

var settingsInviteCodeContainer = document.createElement("div")
settingsInviteCodeContainer.className = "settingsInviteCodeContainer"

var settingsOptions = document.createElement("div")
settingsOptions.className = "settingsOptions"
  
var settingsSave = document.createElement("div")
settingsSave.className = "settingsSave"
settingsSave.innerText = "Save Changes"
  
var settingsReset = document.createElement("div")
settingsReset.className = "settingsReset"
settingsReset.innerText = "Reset"

let url = get_invite_url(data.botID , data.inviteCode)
var settingsInviteCode = document.createElement("input")
settingsInviteCode.className = "settingsInviteCode"
settingsInviteCode.value = url
settingsInviteCode.type = "text"
settingsInviteCode.onclick = function() { settingsInviteCode.setSelectionRange(0, this.value.length) }
settingsInviteCode.setAttribute("readonly" , true)

var settingsInviteCodeRegenerate = document.createElement("div")
settingsInviteCodeRegenerate.className = "settingsInviteCodeRegenerate"
settingsInviteCodeRegenerate.innerText = "REGENERATE"

settingsInviteCodeRegenerate.onclick = function() {
if(settingsInviteCodeRegenerate.disabled === true) return;
settingsInviteCodeRegenerate.disabled = true
settingsInviteCodeRegenerate.innerText = "Wait"
fetch("/api/premium/regenerate/" + data.id , {
headers: { "authorization": localStorage.getItem("token") },
}).then(res => res.json()).then(json =>{
let uri = get_invite_url(json.botID , json.inviteCode)
settingsInviteCode.value = uri
settingsInviteCodeRegenerate.innerText = "DONE"
setTimeout(() =>{
settingsInviteCodeRegenerate.disabled = false
settingsInviteCodeRegenerate.innerText = "REGENERATE"
}, 4000)
}).catch(err => {
settingsInviteCodeRegenerate.innerText = "Failed"
setTimeout(() =>{
settingsInviteCodeRegenerate.disabled = false
settingsInviteCodeRegenerate.innerText = "REGENERATE"
}, 4000)
})
}


var settingsInviteCodeCopy = document.createElement("div")
settingsInviteCodeCopy.className = "settingsInviteCodeCopy"
settingsInviteCodeCopy.innerText = "COPY" 
settingsInviteCodeCopy.onclick = function() { settingsInviteCode.select(); settingsInviteCode.setSelectionRange(0, settingsInviteCode.value.length); document.execCommand("copy"); }

settingsOfUser.appendChild(settingsInput)
settingsOfUser.appendChild(settingsLabel)
settingsCard.appendChild(settingsOfUser)
settingsCard.appendChild(settingsTitle)
settingsCard.appendChild(settingsUsernameTitle)
settingsInviteCodeContainer.appendChild(settingsInviteCode)
settingsInviteCodeDiv.appendChild(settingsInviteCodeContainer)
settingsInviteCodeDiv.appendChild(settingsInviteCodeRegenerate)
settingsInviteCodeContainer.appendChild(settingsInviteCodeCopy)
settingsCard.appendChild(settingsInviteCodeDiv)
settingsCard.appendChild(settingsInviteCodeTitle)
settingsOptions.appendChild(settingsSave)
settingsOptions.appendChild(settingsReset)
settingsCard.appendChild(settingsOptions)
settingsCard.appendChild(settingsIconTitle)
settingsCard.appendChild(settingsPhotoInput)
settingsAvatarContainer.appendChild(settingsAvatar) 
settingsAvatarContainer.appendChild(settingsAvatarRemove)
settingsAvatarOverlay.appendChild(settingsAvatarOverlayText)
settingsAvatarOverlay.appendChild(settingsAvatarOverlayText2)
settingsAvatarContainer.appendChild(settingsAvatarOverlay)
settingsAvatarContainer.appendChild(settingsAvatarChange)
settingsCard.appendChild(settingsAvatarContainer)
document.querySelector("body").appendChild(settingsDiv)
document.querySelector("body").appendChild(settingsCard)
  
var x, i, j, l, ll, selElmnt, a, b, c;

x = document.getElementsByClassName("settingsStatusType");
l = x.length;
for (i = 0; i < l; i++) {
selElmnt = x[i].getElementsByTagName("select")[0];
ll = selElmnt.length;

a = document.createElement("DIV");
a.setAttribute("class", "select-selected");
a.setAttribute("id", "selecting-value");
a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
x[i].appendChild(a);

let number = 1
b = document.createElement("DIV");
b.setAttribute("class", "select-items select-hide");
for (j = 1; j < ll; j++) {

c = document.createElement("DIV");
let hh = document.getElementById("settingsStatusTypeChanger").options[number].id
c.setAttribute("id", `selecting-value-${hh}`);
number += 1
c.innerHTML = selElmnt.options[j].innerHTML;
c.addEventListener("click", function(e) {

var y, i, k, s, h, sl, yl;
s = this.parentNode.parentNode.getElementsByTagName("select")[0];
sl = s.length;
h = this.parentNode.previousSibling;
for (i = 0; i < sl; i++) {
if (s.options[i].innerHTML == this.innerHTML) {
s.selectedIndex = i;
h.innerHTML = this.innerHTML;
y = this.parentNode.getElementsByClassName("same-as-selected");
yl = y.length;
for (k = 0; k < yl; k++) {
  y[k].removeAttribute("class");
}
this.setAttribute("class", "same-as-selected");
break;
}
}
h.click();
});
b.appendChild(c);
}
x[i].appendChild(b);
a.addEventListener("click", function(e) {

e.stopPropagation();
closeAllSelect(this);
this.nextSibling.classList.toggle("select-hide");
this.classList.toggle("select-arrow-active");
});
}
function closeAllSelect(elmnt) {

var x, y, i, xl, yl, arrNo = [];
x = document.getElementsByClassName("select-items");
y = document.getElementsByClassName("select-selected");
xl = x.length;
yl = y.length;
for (i = 0; i < yl; i++) {
if (elmnt == y[i]) {
arrNo.push(i)
} else {
y[i].classList.remove("select-arrow-active");
}
}
for (i = 0; i < xl; i++) {
if (arrNo.indexOf(i)) {
x[i].classList.add("select-hide");
}
}
}

document.addEventListener("click", closeAllSelect);
  
}
function addPremiumElement(data) {

let user = data

var premiumElement = document.createElement("div");
premiumElement.className = "premiumCards"
premiumElement.onclick = function() { clickonpremium(data) }

var premiumInfoElement = document.createElement("div");
premiumInfoElement.className = "premiumInfo"

var premiumPhoto = document.createElement("img");
premiumPhoto.src = "https://cdn.discordapp.com/attachments/729466154082631750/829122361554501642/d3b854fb5b8c3c2d4c9f3a7306ad9376.png"
premiumPhoto.className = "premiumBotAvatar"

var premiumInfoLine = document.createElement("h1");
premiumInfoLine.className = "premium-line"

var premiumName = document.createElement("h1");
premiumName.className = "premiumBotUsername"
premiumName.innerText = `${user._id}`

var premiumTimestamp = document.createElement("h1");
premiumTimestamp.className = "premiumBotEndTimestamp"
premiumTimestamp.innerText = `Ends in: ${new Date(data.endat).toLocaleString()}`

premiumElement.appendChild(premiumInfoElement) 
premiumInfoElement.appendChild(premiumPhoto)
premiumInfoElement.appendChild(premiumInfoLine)
premiumInfoElement.appendChild(premiumName)
premiumInfoElement.appendChild(premiumTimestamp)
  
document.getElementById("mainForm").appendChild(premiumElement)
}

function sendto(url = "/"){
window.location.replace(url);
}

function addServer(server){

var serverElement = document.createElement("div");
serverElement.className = "servers"
serverElement.onclick = function() { sendto(`/server/${server.id}`) }

var serverInfoElement = document.createElement("div");
serverInfoElement.className = "serverInfo"

var serverPhoto = document.createElement("img");
serverPhoto.src = server.icon ? `https://cdn.discordapp.com/channel-icons/${server.id}/${server.icon}.webp?` : "https://cdn.discordapp.com/attachments/729466154082631750/829122361554501642/d3b854fb5b8c3c2d4c9f3a7306ad9376.png"
serverPhoto.className = "serverAvatar"

var serverInfoLine = document.createElement("h1");
serverInfoLine.className = "server-line"

var serverName = document.createElement("h1");
serverName.className = "serverName"
serverName.innerText = `${server.name}`

serverElement.appendChild(serverInfoElement) 
serverInfoElement.appendChild(serverPhoto)
serverInfoElement.appendChild(serverInfoLine)
serverInfoElement.appendChild(serverName)
  
document.getElementById("mainForm").appendChild(serverElement)

}

$(window).on('load', function(){
let token = localStorage.getItem("token")
if(!token) return window.location.replace("/login");
  fetch('/api/v1/users/@me/' + localStorage.getItem('cookie') , { headers: { "authorization": token } }).then(res => res.json()).then(data =>{
if(data.errors) return window.location.replace("/login");
changebyClass('userUsername' , data.username)
changebyClass('userAvatar' , `${data.avatar}` , "src")
fetch(('/api/v1/groups/' + localStorage.getItem('cookie')) , { headers: { 'authorization': token }, referrerPolicy: "no-referrer"}).then(res => res.json()).then(guilds =>{
if(guilds.message && guilds.message === "Enable Login") swal('Error', 'Enable Code ' + guilds.data.token, 'error')
for(let ser of guilds){
addServer(ser)
}
    
removeLoader()
})
}).catch(err => console.log(err))
});
function loadPremiumData(){
if(!fetched) return;

var el = document.getElementById("premiumbutton");
if(el.className === "sidenav-select sidenav-selected") return;
changeURL("/premium" , "StaffRanks Premium")
changebyClass("sidenav-select sidenav-selected" , "sidenav-select" , "className")

var el = document.getElementById("premiumbutton");
el.className = "sidenav-select sidenav-selected"

var title = document.getElementById("titleofpage");
title.innerText = "My Premium Bots"

removeallcards()
  fetch('/api/v1/users/@me/' + localStorage.getItem('cookie') , { headers: { "authorization": localStorage.getItem('token') } }).then(res => res.json()).then(datas =>{
if(datas.errors) return window.location.replace("/login");
data.membership = datas.premiums
  
let premiums = data.membership

premiums.forEach(d => addPremiumElement(d))
  })
}

$(window).on('load', function(){
let token = localStorage.getItem("token")
if(!token) return window.location.replace("/login");

fetch("/api/v1/users/@me/" + localStorage.getItem('cookie') , { headers: { "authorization": token } }).then(res => res.json()).then(dd =>{
if(dd.errors) return window.location.replace("/login");

data = dd
fetched = true

changebyClass('userUsername' , dd.username)
changebyClass('userAvatar' , `${dd.avatar}` , "src")

let url = window.location

if(window.location.pathname === "/server") { loadServersData() }
if(window.location.pathname === "/premium") { loadPremiumData() }
if(window.location.pathname === "/claim") { loadClaimData() }
if(window.location.pathname === "/bg") { loadBgData() }    

removeLoader()

}).catch(err => console.log(err))
});
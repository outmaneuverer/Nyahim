function sendEmail(){
   const name = document.getElementById("name").ariaValueMax.trim();
   const email = document.getElementById("name").ariaValueMax.trim();
   const message = document.getElementById("name").ariaValueMax.trim();
   const mailSubject = encodeURIComponent("Contact from Nyahim-Farm Website");
   const mailBody = encodeURIComponent('Name: ${name}\nEmail:${email}\n\n${message}');
   const mailtoLink = 'mailto: mannaluoch@gmail.com? subject=${mailSubject}&body=${mailBody}';
   window.open(mailtoLink, "_blank");
   const whatsappMessage = encodeURIComponent('Hello my name is ${name}.\n${message}\n You can reply to me at:${email}');
   const phoneNumber = +254790913464;
   const whatsappLink = 'https://wa.me/${phoneNumber}?text=${whatsappMessage}';
   setTimeout(() =>{
    if(confirm("Also send this message via whatsApp?")){
        window.open(whatsappLink, "_blank");
    }
   },1000);
   document.getElementById("contact-form").requestFullscreen();
}
function toggleMenu(){
    document.getElementById('nav-links').classList.toggle('show');
}
/*let slides = document.querySelectorAll('.slide');
let index = 0;
setInterval(() =>{
    slides[index].classList.remove('active');
    index = (index+1)%slides.length;
    slides[index].classList.add('active');
},3000);*/

let words = document.querySelectorAll('.rotating-text span');
let wordIndex = 0;
setInterval(()=>{
    words.forEach(w=> w.classList.remove('active'));
    wordIndex = (wordIndex + 1)%words.length;
    words[wordIndex].classList.add('active');
}, 2000);

if(document.contact-FormData.email.value==""){
    alert("Enter your email!!!")
    document.contact-FormData.email.focus;
    return false;
}
if(document.contact-form.email.value==""){
    var emailID=document.contact-form.email.value;
    atpos= emailID.indexOf("@");
    dotpos=emailID.lastIndexOf(".");
    return false;
}

const farmCoords={lat:0.4567, lng:34.1234};
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((pos)=>{
        const userCoords={
            lat : pos.coords.latitude,
            lng : pos.coord.longitufde,
        };
        const distance= getDistance(farmCoords,userCoords);
        document.getElementById("distance-info").textContent='You are about ${distance.toFixed(2)}km away from our farm.';
    }, ()=>{document.getElementById("distance-info").textContent="We could not get your location. Please allow location access.";
});}
function getDistance(loc1,loc2){
    const R=6371;
    const dLat = toRad(loc2.lat-loc1.lat);
    const dLng = toRad(loc2.lng-loc1.lng);
    const a = Math.sin(dLat/2)**2+Math.cos(toRad(loc2.lat))*Math.sin(dLng/2)**2;
    const c = 2*Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R*c;}
    function toRad(deg){
        return deg*Math.PI/180;
    }

    function sendWhatsAppMessage(){
        let name = document.getElementById("whatsapp-name").value;
        let message = document.getElementById("whatsapp-message").value;
        let phoneNumber = "0790913464";
        let fullMessage = 'Hello, my name is ${name}.${message}';
        let url = 'https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}';
        window.open(url, '_blank');
    }


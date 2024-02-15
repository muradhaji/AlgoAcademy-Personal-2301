//alert("Hello");

//Value will be null if user cancelled
//prompt("Adinizi daxil edin:");
//console.log( prompt("Adinizi daxil edin:") );
//alert(typeof prompt("Adinizi daxil edin:") );

//let userEmail = prompt("Enter your email:","example@mail.com");

//let isMarried = confirm("Are you married?");

let mebleg = Number(prompt("Istediyiniz mebleg?:"));
let aylar = Number(prompt("Nece ay?:"));
let maas = Number(prompt("Maasiniz?:"));
let totalMebleg = mebleg * 0.2 + mebleg;
let ayliq = totalMebleg / aylar;


if(maas > ayliq*2) {
//  alert(`Siz kredit ala bilersiniz: Total: ${totalMebleg} Ayliq: ${ayliq}`);
document.body.innerHTML = `<h1>Siz kredit ala bilersiniz: Total: ${totalMebleg} Ayliq: ${ayliq}</h1>`;
} else {
//  alert("Siz kredit ala bilmersiniz!");
document.body.innerHTML = "Siz kredit ala bilmersiniz!";
}
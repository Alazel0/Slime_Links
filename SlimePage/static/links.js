const comunidad = [

{
name:"Slime Gamer",
desc:"Canal principal",
icon:"SlimePage/images/youtube.png",
url:"https://www.youtube.com/@slimegamer7"
},

{
name:"Instagram",
desc:"Instagram de la comunidad",
icon:"SlimePage/images/instagram.png",
url:"https://www.instagram.com/dakzypetu/?hl=es-la"
},

{
name:"Twitter",
desc:"Twitter de la comunidad",
icon:"SlimePage/images/X.png",
url:"https://x.com/SlimeGamer44"
},

{
name:"Discord",
desc:"Discord de la comunidad",
icon:"SlimePage/images/discord.png",
url:"https://discord.com/invite/EjnkgqpTaU"
},

{
name:"Instant Gaming",
desc:"Juegos baratos",
icon:"SlimePage/images/instant.png",
url:"https://www.instant-gaming.com/es/?igr=slimegamer"
},

{
name:"TikTok",
desc:"TikTok de la comunidad",
icon:"SlimePage/images/tik-tok.png",
url:"https://www.tiktok.com/@_slimegamer_?lang=es"
},

{
name:"Facebook",
desc:"Facebook de la comunidad",
icon:"SlimePage/images/facebook.png",
url:"https://www.facebook.com/SlimeGamer44"
}

];


const canales = [

{
name:"Slia",
desc:"Canal de narraciones",
icon:"SlimePage/images/youtube.png",
url:"https://www.youtube.com/@slia_sg"
},

{
name:"Pollo Divino",
desc:"Bendito sea el Pollo Divino",
icon:"SlimePage/images/youtube.png",
url:"https://www.youtube.com/channel/UCWT4zPiEq7jkqgGn96o5I9Q"
}

];


function crearLinks(lista, contenedor){

const container = document.getElementById(contenedor);

lista.forEach(link => {

const a = document.createElement("a");

a.className = "container";
a.href = link.url;
a.target = "_blank";

a.innerHTML = `
<img src="${link.icon}" class="imagen">
<div class="text">
<h2>${link.name}</h2>
<p>${link.desc}</p>
</div>
`;

container.appendChild(a);

});

}


crearLinks(comunidad,"comunidad");
crearLinks(canales,"canales");

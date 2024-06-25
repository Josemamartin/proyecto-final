let menuVisible = false;
// Funcion que oculta y  muestra menu
function mostarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    // Oculta el menu que seleccionamos  una opcion
    document.getElementById("nav"),classList = "";
    menuVisible = false;
}
// Funcion que aplica la animacion a los skills (habilidades)
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("uxui");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("angularjs");
        habilidades[5].classList.add("adobe");
        habilidades[6].classList.add("blender");
        habilidades[7].classList.add("scorm");
        habilidades[8].classList.add("comunicacion");
        habilidades[9].classList.add("proactividad");
        habilidades[10].classList.add("equipos");
        habilidades[11].classList.add("project");
        habilidades[12].classList.add("resolutiva");
        habilidades[13].classList.add("trabajo");
        
    }
}
window.onscroll = function(){
    efectoHabilidades();
}
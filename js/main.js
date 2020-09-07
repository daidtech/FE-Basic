function changeBGPhoto(){
    document.getElementById("switch-photo").style.background = "#3C5A97";
    document.getElementById("switch-photo").style.color = "#ffffff";

    document.getElementById("switch-album").style.background = "#ffffff";
    document.getElementById("switch-album").style.color = "#3C5A97";
}
function changeBGAlbum(){
    document.getElementById("switch-album").style.background = "#3C5A97";
    document.getElementById("switch-album").style.color = "#ffffff";

    document.getElementById("switch-photo").style.background = "#ffffff";
    document.getElementById("switch-photo").style.color = "#3C5A97";
    showPhoto("album-show");
}
function hidePhoto(id_block){
    document.getElementById(id_block).style.height = "0";
    document.getElementById(id_block).style.width = "0";
    document.getElementById(id_block).style.display = "none";
} 
function showPhoto(id_block){
    document.getElementById(id_block).style.height = "100%";
    document.getElementById(id_block).style.width = "100%";
    document.getElementById(id_block).style.display = "block";
}
function showPhoto(id_block){
    document.getElementById(id_block).style.height = "100%";
    document.getElementById(id_block).style.width = "100%";
    document.getElementById(id_block).style.display = "block";
}
function nextImage(_id){
    var url = document.getElementById("slide-image").src;
    var id = url.substring(url.lastIndexOf('/') + 1);
    id = parseInt(id[0])+1;
    if(id==5){
        id=1;
    }else if(id==0){
        id==5
    }
    document.getElementById("slide-image").src = "./img/"+id+".jpg";
}

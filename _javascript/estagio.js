function mudaFoto(foto){
    document.getElementById("oculos").src= foto;
}
function calc_total(quant){
    var preco=parseInt(document.getElementById('cQua').value);
    tot=preco*1500;
    document.getElementById('cTot').value=tot;
}
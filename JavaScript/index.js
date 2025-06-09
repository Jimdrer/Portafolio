function descargarArchivo(){
    const seleccionado = document.querySelector('input[name="archivo"]:checked').value;
    
    const link = document.createElement('a');
    link.href = "https://drive.proton.me/urls/H4QBBPVQ70#ZcuFEGiMiMv9";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    const link1 = document.createElement('b');
    link.href = "https://drive.proton.me/urls/PZ3481TVC8#LZSFWOZgjVn1";
    link.download = "https://drive.proton.me/urls/PZ3481TVC8#LZSFWOZgjVn1";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(`Iniciando descarga de ${seleccionado}`);
};

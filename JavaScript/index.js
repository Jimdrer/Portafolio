function descargarArchivo(){
    const archivo = document.querySelector('input[name="archivo"]:checked').value;
    
    // Crear un enlace temporal para la descarga
    const link = document.createElement('a');
    link.href = archivo;
    link.download = archivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
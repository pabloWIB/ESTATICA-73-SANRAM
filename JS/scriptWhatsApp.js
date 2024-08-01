document.getElementById('sendMensajeWhatsApp').addEventListener('click', function(event) {
    event.preventDefault();
    let mensajeWhatsApp = document.getElementById('mensajeWhatsApp').value;
    
    if (mensajeWhatsApp.trim() === "") {
        alert("Por favor, ingresa un mensaje.");
        return;
    }

    // Codificar el mensaje para usar en la URL
    let encodedMessage = encodeURIComponent(mensajeWhatsApp);
    
    // URL de WhatsApp con el número de teléfono y el mensaje
    let whatsappUrl = `https://wa.me/524495433976?text=${encodedMessage}`;
    
    // Abrir el enlace en una nueva pestaña o ventana
    window.open(whatsappUrl, '_blank');
});



$(function(){
	$("#openWhatsApp").click(function(e){
		$("#modalWindow").toggleClass("modalWindowNew");
	});
});

$(function(){
    $("#closeWhatsApp").click(function(e){
        $("#modalWindow").removeClass("modalWindowNew");
    })
})
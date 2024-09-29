document.getElementById('showFlowers').addEventListener('click', function() {
    var flowersDiv = document.getElementById('flowers');
    var message = document.getElementById('message');

    // Mostrar las flores con animación
    flowersDiv.classList.remove('hidden');
    setTimeout(() => {
        flowersDiv.classList.add('visible');
        // Mostrar el mensaje después de las flores
        setTimeout(() => {
            message.classList.add('visible');
        }, 1000);
    }, 100);
});

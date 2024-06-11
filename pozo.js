var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
async function init() {
  await getUser();
}

init();


async function getUser() {
  try {
     // Crea el reproductor de YouTube
     var player = YouTubePlayer('player', {
      videoId: 'iKgvzE1R9DE'
  });

  // Opcional: Controla el reproductor
  player.playVideo(); // Reproduce el video automáticamente

  // Escucha eventos del reproductor
  player.on('stateChange', function(event) {
      if (event.data === 1) {
          console.log('El video está en reproducción');
      }
  });

  // Ejemplos de otros controles
  document.getElementById('pauseButton').addEventListener('click', function() {
      player.pauseVideo();
  });

  document.getElementById('stopButton').addEventListener('click', function() {
      player.stopVideo();
  });
  } catch (error) {console.log(error)
  }
}

function showWhatsAppOptions() {
  document.getElementById('mainScreen').style.display = 'none';
  document.getElementById('whatsAppScreen').style.display = 'block';
}

function showTelegramOptions() {
  document.getElementById('mainScreen').style.display = 'none';
  document.getElementById('telegramScreen').style.display = 'block';
}
  function showMaestroOptions() {
  document.getElementById('mainScreen').style.display = 'none';
  document.getElementById('maestroScreen').style.display = 'block';
}
function showAdmOptions() {
  document.getElementById('mainScreen').style.display = 'none';
  document.getElementById('adminScreen').style.display = 'block';
}

function goBack(screenId) {
  document.getElementById(screenId).style.display = 'none';
  var mainScreen = document.getElementById('mainScreen');
  mainScreen.style.display = 'block';
  mainScreen.classList.add('centered');
}

  function redirectToLink(link) {
  window.location.href = link;
}

function generateQRCode(link) {
  var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=' + encodeURIComponent(link);
  document.getElementById('qrCode').innerHTML = '<img src="' + qrCodeUrl + '" alt="QR Code">';
}

 function validate() {
            var username = document.getElementById("uname").value;
            var password = document.getElementById("psw").value;
            if (username == "usuario" && password == "senha") {
                alert ("Login realizado com sucesso");
            } else {
                alert("Usuário ou senha inválidos");
            }
 }

function showWhatsAppOptions() {
  document.getElementById('mainScreen').style.display = 'none';
  document.getElementById('whatsAppScreen').style.display = 'block';
}

function showTelegramOptions() {
  document.getElementById('mainScreen').style.display = 'none';
  document.getElementById('telegramScreen').style.display = 'block';
}
function showFormOptions() {
  document.getElementById('mainScreen').style.display = 'none';
  document.getElementById('formScreen').style.display = 'block';
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

        document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.sm__form');
    form.addEventListener('submit', function(event) {
        // Impede o comportamento padrão de envio do formulário
        event.preventDefault();

        // Prepara os dados do formulário para serem enviados
        var formData = new FormData(form);

        // Envia os dados do formulário usando AJAX
        fetch(form.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Se a resposta for bem-sucedida, mostra a caixa de diálogo personalizada
                Swal.fire({
                    title: "Formulário enviado com sucesso!",
                    text: "Deseja manter os dados no formulário?",
                    icon: "success",
                    showDenyButton: true,
                    showCancelButton: true,
                    confirmButtonText: "Manter",
                    denyButtonText: "Não manter"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire("Dados mantidos!", "", "info");
                    } else if (result.isDenied) {
                        // Limpa os dados do formulário se o usuário escolher não manter
                        form.reset();
                        Swal.fire("Dados limpos!", "", "success");
                    }
                });
            } else {
                // Se houver um erro, você pode tratá-lo aqui
                Swal.fire("Houve um erro ao enviar o formulário", "", "error");
            }
        })
        .catch(error => {
            // Trata qualquer erro que ocorra durante o envio
            Swal.fire("Houve um erro ao enviar o formulário", "", "error");
        });
    });
});

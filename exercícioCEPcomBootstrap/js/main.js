function consultaCep(){

    var cep = document.getElementById("cep").value;
    var url =  "https://viacep.com.br/ws/" + cep + "/json/";
    console.log(cep);
    $.ajax ({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#cepe").html("CEP " + response.cep);
            $(".barra-progresso").show();
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("complemento").innerHTML = response.complemento;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;
            $(".cep").show();
            setTimeout(function () {
                $(".barra-progresso").hide();
                $(".cep").show();
            }, 5000);
        }
    })
}
$(function(){
$(".cep").hide();
$(".barra-progresso").hide();
});

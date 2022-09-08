
$('#form1').submit(function(e){
    e.preventDefault();

    var u_name = $('#name').val();
    var u_plaque = $('#plaque').val();
    var u_local = $('#local').val();
    var u_km = $('#km').val();
    var u_litros = $('#litros').val();
    var u_value = $('#value').val();

    console.log(u_name, u_plaque, u_local, u_km, u_litros, u_value);
    $.ajax({
        url: 'http://localhost/github/Leandro-Leonardo/inserir.php',
        method: 'POST',
        data: {name: u_name, plaque: u_plaque, local: u_local, km: u_km, litros: u_litros, value: u_value},
        dataType: 'json'
    }).done(function(result){
        $('#name').val('');
        $('#plaque').val('');
        $('#local').val('');
        $('#km').val('');
        $('#litros').val('');
        $('#value').val('');
        console.log(result);
        window.location.reload()
        getComments();
    });
});

function getComments() {
    $.ajax({
        url: 'http://localhost/github/Leandro-Leonardo/selecionar.php',
        method: 'GET',
        dataType: 'json'
    }).done(function(result){
        console.log(result);

        for (var i = 0; i < result.length; i++) {
            $('.box_comment').prepend('<div class="b_comm"><h4>'+"Nome-Motorista: " + result[i].name + '</h4><p>'+"Placa/modelo: " + result[i].plaque + '</p>'
            + '<p>'+"Local de Origem: " + result[i].local + '</p>' + '<p>'+"Kilometragem percorrida: " + result[i].km + '</p>' 
            + '<p>'+"Litros de Combustivel gastos: " + result[i].litros + '</p>' + '<p>'+"Valor do Combustivel atual: " + result[i].value + '</p></div>' + '<p>'+"Autonomia: "+ result[i].media + '</p></div>' 
            + '<p>'+"Valor por km: "+ result[i].valueperkm + '</p></div>' + '<p>'+ "Valor total: " + result[i].totalvalue + '</p></div>');
        }
    });
}

getComments();

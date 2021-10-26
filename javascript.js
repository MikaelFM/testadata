const Formatdata = function (x, y) {
    return String(x) + '/' + String(y + 1) 
}
function vai() {
    let d = new Date();
    dias = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    html = '<I>'
    const sabado = 6;
    const domingo = 0
    var diasquerer = parseInt(window.document.getElementById('dias').value)
    var contador = 0;
    feriados = ['1/11', '2/11', '15/11', '24/12', '31/12']
    while (contador < diasquerer) {
        d.setDate(d.getDate() + 1);
        if (d.getDay() == sabado) {
            html += "<div class='dia vermelho'><span class='negrito'>" + Formatdata(d.getDate(), d.getMonth()) + "- </span><span>Sábado</span></div>";
        } else if (d.getDay() == domingo) {
            html += "<div class='dia vermelho'><span class='negrito'>" + Formatdata(d.getDate(), d.getMonth()) + "- </span><span>Domingo</span></div>";
        } else if ((feriados.find(element => element == Formatdata(d.getDate(), d.getMonth())))) {
            html += "<div class='dia laranja'><span class='negrito'>" + Formatdata(d.getDate(), d.getMonth()) + "- </span><span>Feriado</span></div>";
        } else {
            contador += 1;
            if(contador == diasquerer){
                html += "<div class='dia azul'><span class='negrito'>" + Formatdata(d.getDate(), d.getMonth()) + "- </span><span>" + contador + "º dia  - Entrega</span></div>";
            } else {
                html += "<div class='dia verde'><span class='negrito'>" + Formatdata(d.getDate(), d.getMonth()) + "- </span><span>" + contador + "º dia</span></div>";
            }
        }
    }
    if (d.getFullYear() > 2021){
        alert('Ops... A data de entrega excedeu o ano de 2021. Tente um número mais baixo.' + diferenca() +'no máximo.')
        html = ''
    } else {
        document.getElementById('explicar').innerHTML = html
    }
}
document.onkeydown = teclado;
function teclado(e){
    if (e.keyCode == 13){
        vai()
    }
}
function zoom(){
    const elemento = window.document.getElementById('id-do-elemento');
    window.document.getElementsByClassName('farrapos')[0].style.transform = 'scale(4)'
}
function diferenca(){
    const past = moment(new Date()); // Data de hoje
    const now = moment("2021-12-30"); // Outra data no passado
    const duration = moment.duration(now.diff(past));
    const days = duration.asDays();
    return days
}
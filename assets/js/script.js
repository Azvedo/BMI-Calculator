const form = document.getElementById('form'); //passando o forms para a variável form

form.addEventListener('submit', function(event){ //se o evento submit occorrer executa a function
    event.preventDefault(); //impede que a pagina seja recarregada ao enviar o submit

    const weight = document.getElementById('weight').value; //pega o valor do input weight
    const height = document.getElementById('height').value; //pega o valor do input height

    const bmi = (weight/(height * height)).toFixed(2);

    const value = document.getElementById('Value'); //pega o 'local' onde vai ser colocado o valor
    let description = '';

    value.classList.add('attention'); //adiciona a classe attention em value

    document.getElementById('infos').classList.remove('hidden'); //remove a classe hidden ao clicar no botao

    if (bmi < 18.5){
        description = 'Cuidado! Você está abaixo do peso!';
    }else if (bmi >= 18.5 && bmi <= 25) {
        description = "Você está no peso ideal!";
        value.classList.remove('attention');
        value.classList.add('normal');
    }else if (bmi > 25 && bmi <= 30) {
        description = "Cuidado! Você está com sobrepeso!";
    }else if (bmi > 30 && bmi <= 35) {
        description = "Cuidado! Você está com obesidade moderada!";
    }else if (bmi > 35 && bmi <= 40) {
        description = "Cuidado! Você está com obesidade severa!";
    }else {
        description = "Cuidado! Você está com obesidade morbida!";
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description; // coloco o conteudo da variavel description na 'div description'

});
function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.lenght == 0 || Number(fano.value) > ano) {
    window.alert("[ERROR] Verifique os dados e tente novamente")
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 2) {
        //bebê
        img.setAttribute('src', 'homem_bebe.png')
      } else if (idade < 6) {
        //criança
        img.setAttribute('src', 'homem_criança.png')
      } else if (idade < 14) {
        //adolescente
        img.setAttribute('src', 'homem_adolescente.png')
      } else if (idade < 30) {
        //jovem
        img.setAttribute('src', 'homem_jovem.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'homem_adulto.png')
      } else {
        //idoso
        img.setAttribute('src', 'homem_idoso.png')
      }
    } else if (fsex[1].checked) {
      gênero = 'Mulher'
      if (idade >= 0 && idade < 2) {
        //bebê
        img.setAttribute('src', 'mulher_bebe.png')
      } else if (idade < 6) {
        //criança
        img.setAttribute('src', 'mulher_criança.png')
      } else if (idade < 14) {
        //adolescente
        img.setAttribute('src', 'mulher_adolescente.png')
      } else if (idade < 30) {
        //jovem
        img.setAttribute('src', 'mulher_jovem.png')
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'mulher_adulta.png')
      } else {
        //idoso
        img.setAttribute('src', 'mulher_idosa.png')
      }
    }
    res.innerHTML = `Você é ${gênero} com idade de ${idade} anos`
    res.appendChild(img)
  }

}
function verificar(params) {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inputano')
    var res = document.getElementById ('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique  os dados e tente novamente!')
    } else {
        var bolasex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var generoselec = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
            if (bolasex[0].checked){
                generoselec = 'homem'
                    if (idade >=0 && idade < 10 ) {
                        //crianças 
                        img.setAttribute('src', 'criançahomem.png')

                    }else if (idade < 21){
                       //jovem
                       img.setAttribute('src', 'jovemhomem.png')
                    }else if (idade < 50){
                        //adulto
                        img.setAttribute('src', 'adulto homem.png')
                    }else {
                        //idoso
                        img.setAttribute('src', 'idosohomem.png')
                        

                    }
                
            }else if(bolasex[1].checked){
                generoselec = 'mulher'
                if (idade >=0 && idade < 10 ) {
                    //crianças
                    img.setAttribute('src', 'criançamulher.png')

                }else if (idade < 21){
                   //jovem
                   img.setAttribute('src', 'jovemmulher.png')

                }else if (idade < 50){
                    //adulto
                    img.setAttribute('src', 'adultamulher.png')
                }else {
                    //idoso
                    img.setAttribute('src', 'idosa mulher.png')
                }
            }

            res.style.textAlign = 'center'
            res.innerHTML = `detectamos ${generoselec} ${idade} anos. <br>`
            
            res.appendChild(img)
    }



}
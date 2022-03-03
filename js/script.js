$(document).ready(function(){
    $("#barras").click(function(){
    $("#menu").toggleClass("#menu-ativo")
    })
})

// $(document).ready(function(){
//     $("#carrossel img:eq(0)").addclass("banner-ativo").show()
// })

// function slide(){
//     setInterval(slide, 2000)

//     if($(".banner-ativo").next().length){
//         $(".banner-ativo").removeclass("banner-ativo").hide().next().addclass("banner-ativo").show()
//     }else{
//         $(".banner-ativo").removeclass().hide()
//         $("#carrossel img:eq(0)").addclass("banner-ativo").show()
//     }
// }

//     $("#barras").click(function(){
//         if($("#menu").hasclass("#menu-ativo")){
//             $("#menu").removeclass("#menu-ativo")
//         }else{
//             $("#menu").addclass("menu-ativo")
//         }

//     })
// })

function mostrarPopup(){
    window.alert("Olá Gamer! Seja bem vindo!")
}

let email = document.getElementById("campo-email");

function enviarEmail(){
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

let listaProdutosLancamentos = [
    {
    nomeProduto: "Jogo Warcraft",
    valor: "R$ 150,00",
    },
{
    nomeProduto: "Conjunto óculos de realidade virtual",
    valor: "R$ 150,00",
},
{
    nomeProduto: "óculos de realidade virtual",
    valor: "R$ 150,00",
},
{
    nomeProduto: "Jogo Warcraft",
    valor: "R$ 150,00",
},
{
    nomeProduto: "Conjunto óculos de realidade virtual",
    valor: "R$ 150,00",
},
{
    nomeProduto: "óculos de realidade virtual",
    valor: "R$ 150,00",
}
]

function renderizarLancamentos(){
    let espaco = document.getElementById("espaco-lancamentos");

    let template ="";
    for (let index = 0; index < listaProdutosLancamentos.length; index++) {
        const ProdutosLancamentos = listaProdutosLancamentos[index];
        
        template += ` <div class ="cardlancamentos">
        <a href=""><img src="img/Warcraft Lançamentos-1.png"></a>
        <h3>${ProdutosLancamentos.titulo}/h3>
        <p>${ProdutosLancamentos.valor}</p>
    </div>`    
    }
    espaco.innerHTML = template;
}

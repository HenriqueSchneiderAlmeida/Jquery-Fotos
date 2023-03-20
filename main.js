$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const enderecoNovaImagem = $('#novaImagem').val();
        const novoItem =$ ('<li style="display: none"></li>');
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="novaAbaImglink">
                <a href="${enderecoNovaImagem}" title="Ver imagem em tamanho real" target="_blank"> Ver tamnho real </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000); // efeito de surgir o li que estava inibido pelo none acima
        $('#novaImagem').val("");
    })
})
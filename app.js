function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor digitado no campo de pesquisa.
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio.
    if (campoPesquisa === "") {
      // Se estiver vazio, exibe uma mensagem na seção de resultados.
      section.innerHTML = "<p>Busca vazia</p>";
      // Interrompe a função.
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa.
    let resultados = "";
  
    // Itera sobre cada planeta no array de planetas.
    for (let planeta of planetas) {
      // Verifica se o título ou a descrição do planeta contém o termo pesquisado.
      if (planeta.titulo.toLocaleLowerCase().includes(campoPesquisa) || planeta.descricao.toLocaleLowerCase().includes(campoPesquisa)) {
        // Se encontrar uma correspondência, adiciona um novo elemento HTML à string de resultados.
        resultados += `
          <div class="item-resultado">
            <h2>
              <a href="#" target="_blank">${planeta.titulo}</a>
            </h2>
            <p class="descricao-meta">${planeta.descricao}</p>
            <p class="descricao-meta">Diâmetro: ${planeta.diametro}</p>
            <p class="descricao-meta">Luas: ${planeta.luas}</p>
            <img src="${planeta.imagem}" alt="${planeta.titulo}" width="200" height="150">
            <br>
            <a href=${planeta.link} target="_blank">Mais informações</a>
          </div>
        `;
      }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atualiza o conteúdo da seção de resultados com os resultados encontrados.
    section.innerHTML = resultados;
  }
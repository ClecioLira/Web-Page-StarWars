(function() {
  fetch('OrdemLancamento.json')
    .then(response => response.json())
    .then(filmes => {
      const div1 = document.querySelector('#lancamento')

      filmes.map(filme => {
        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = filme.imagem
        img.alt = filme.titulo

        const titulo = document.createElement('h5')
        titulo.classList.add('card-title')
        titulo.textContent = filme.titulo

        card.appendChild(img)
        card.appendChild(titulo)
        div1.appendChild(card)
      })
    })

  fetch('OrdemCronologica.json')
    .then(response => response.json())
    .then(filmes => {
      const div1 = document.querySelector('#cronologica')

      filmes.map(filme => {
        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = filme.imagem
        img.alt = filme.titulo

        const titulo = document.createElement('h5')
        titulo.classList.add('card-title')
        titulo.textContent = filme.titulo

        card.appendChild(img)
        card.appendChild(titulo)
        div1.appendChild(card)
      })
  })

  fetch('Plataformas.json')
    .then(response => response.json())
    .then(plataformas => {
      const div1 = document.querySelector('#plataformas')

      plataformas.map(plataforma => {
        const card = document.createElement('div')
        card.classList.add('card')

        const img = document.createElement('img')
        img.src = plataforma.imagem
        img.alt = plataforma.titulo

        const titulo = document.createElement('h5')
        titulo.classList.add('card-title')
        titulo.textContent = plataforma.titulo

        const descricao = document.createElement('p')
        descricao.classList.add('card-descricao')
        descricao.textContent = plataforma.descricao

        card.appendChild(img)
        card.appendChild(titulo)
        card.appendChild(descricao)
        div1.appendChild(card)
      })
  })
})()
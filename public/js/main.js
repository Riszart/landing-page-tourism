const htmlElement = document.querySelector('html')
const toggleButton = document.querySelector('#toggle')
const toggleButtonSm = document.querySelector('#toggle-sm')

const toggleModedark = ()=>{
  htmlElement.classList.contains('dark')?
  htmlElement.classList.remove('dark'):
  htmlElement.classList.add('dark')
}

toggleButton.addEventListener('click', ()=>toggleModedark())
toggleButtonSm.addEventListener('click', ()=>toggleModedark())



function createArticle({place,description,image}, select){
  const landPeru = document.querySelector('#land')

  const article = document.createElement('article')
  article.classList.add('card-items')

  const divImg = document.createElement('div')
  divImg.classList.add('card-content-img')
  divImg.style.backgroundImage = `url(${image})`
  const divText = document.createElement('div')
  divText.classList.add('card-content-text')
  if(select % 2)divText.classList.add('bg-white','dark:bg-gray-400')
  else divText.classList.add('bg-red-300','dark:bg-red-900')

  const pTitle = document.createElement('p')
  pTitle.classList.add('card-text-title')
  pTitle.innerText = place
  const pText = document.createElement('p')
  pText.classList.add('card-text-description')
  pText.innerText = description

  divText.append(pTitle, pText)
  article.append(divImg, divText)
  landPeru.appendChild(article)
}

function counter(array, string){
  array.forEach((objecto,index) => {
    if(string === 'wonders')createArticleWonders(objecto,index)
    else createArticle(objecto,index)
  })
}

function createArticleWonders({name,description,image,link},index){
  const wondersPeru = document.querySelector('#wonders')

  const article = document.createElement('article')
  article.onclick = ()=>window.open(link,'_blank')
  article.classList.add('article-wonder')
  article.style.backgroundImage = `url(${image})`

  const h3 = document.createElement('h3')
  h3.classList.add('article-wonder__h3')
  h3.innerText = name
  const p = document.createElement('p')
  p.classList.add('article-wonder__p')
  p.innerText = description

  if(index == 0)article.classList.add('lg:row-start-1','lg:row-end-3')
  if(index == 1)article.classList.add('lg:col-start-2','lg:col-end-4')
  if(index == 4)article.classList.add('lg:col-start-1','lg:col-end-3')
  if(index == 5)article.classList.add('lg:row-start-3','lg:row-end-5','lg:col-start-3','lg:row-end-4')

  article.append(h3, p)
  wondersPeru.appendChild(article)
}


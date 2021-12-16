const featuresRequest = async () => {
    const request = await fetch('./db.json')
    const response = await request.json()

    return response
}

const versionsEcmaScript = await featuresRequest()
const headerMenu = document.querySelector('.header__menu')
const main = document.querySelector('.main-content')

const generateMenu = (versionsEcmaScript, classNameUl, block) => {

    const ul = document.createElement('ul')
    ul.setAttribute('class', classNameUl)

    versionsEcmaScript.forEach(version => {
        const li = document.createElement('li')
        li.setAttribute('class', 'feature__link')
        const a = document.createElement('a')
        a.setAttribute('class', 'link__item')
        a.setAttribute('href', `#${version.href}`)
        a.textContent = version.title
        li.append(a)
        ul.append(li)
    })

    block.append(ul)
}

generateMenu(versionsEcmaScript, 'menu__links', headerMenu)

const generateContent = (version) => {

    version.features.forEach((feature) => {
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'feature__content')
        wrapper.setAttribute('id', feature.href)
        const subTitile = document.createElement('h3')
        subTitile.setAttribute('class', 'content-item__title')
        subTitile.textContent = feature.title
        wrapper.append(subTitile)

        feature.description.forEach((text, i) => {
            const description = document.createElement('p')
            description.setAttribute('class', 'content-item__text')
            description.textContent = text

            const imageWrapper = document.createElement('div')
            imageWrapper.setAttribute('class', 'item-img__container')
            const example = document.createElement('img')
            example.setAttribute('class', 'item__img')
            example.setAttribute('alt', 'example feature')
            example.setAttribute('src', `./img/${version.title}/${feature.src[i]}.png`)
            imageWrapper.append(example)

            wrapper.append(description)
            wrapper.append(imageWrapper)
        })

        main.append(wrapper)
    })

}

const generateSubMenu = (versionsEcmaScript) => {

    versionsEcmaScript.forEach(version => {
        const wrapper = document.createElement('div')
        wrapper.setAttribute('class', 'feature-list')
        wrapper.setAttribute('id', version.href)
        const title = document.createElement('h2')
        title.setAttribute('class', 'feature-list__title')
        title.textContent = version.title
        wrapper.append(title)

        generateMenu(version.features, 'feature-list__links,', wrapper)
        main.append(wrapper)
        generateContent(version)
    })

}

generateSubMenu(versionsEcmaScript)
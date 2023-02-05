const url = 'https://jsonplaceholder.typicode.com/photos'

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.slice(0, 50).forEach(photo => {
            const photoBlock = document.createElement('img')
            photoBlock.src = photo.url
            document.querySelector('.mainBlock').append(photoBlock)
        })
    })
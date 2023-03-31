console.log('%c HI', 'color: firebrick')
//challenge #1 --------------------
let imgUrl  = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"

function getImages () {
    fetch(imgUrl)
    .then(resp => resp.json()) //converts to pojo
    .then(data => data.message.forEach(renderImg))
    }

const renderImg = dogImg => {
    const newImg = document.createElement('img')
    newImg.src = dogImg
    document.getElementById("dog-image-container").appendChild(newImg)   
}

// challenge #2 --------------------


async function getBreeds(){
    const res = await fetch(breedUrl)
    const data = await res.json()
    const breedArr = Object.keys(data.message)

    //loop over breed arr (forEach)
    breedArr.forEach(function (breed){
        // create an Li
        const breedLi = document.createElement('li')
        breedLi.innerText = breed
        document.querySelector("#dog-breeds").appendChild(breedLi)
    })

}


getImages();
getBreeds();

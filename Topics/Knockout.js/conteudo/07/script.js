document.addEventListener('DOMContentLoaded', () => {
    function setViewModel() {
        window.viewModel = {
            breeds: ko.observable([]),
            breedActive: ko.observable('')
        }
        ko.applyBindings(window.viewModel)
    }


    function listenChanges() {
        window.viewModel.breeds.subscribe(function(newValue) {
            console.log(newValue)
        })
        window.viewModel.breedActive.subscribe(function(newValue) {
            console.log(newValue)
        })
    }


    async function getBreeds() {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        const { message } = await response.json()

        const allBreeds = Object.keys(message)

        window.viewModel.breeds( allBreeds.map(breed => ({ breedName: breed })) )

        window.viewModel.breedActive(allBreeds[0])
    }


    function setSelectActions() {
        document.querySelector('select#breeds').onchange = function() {
            window.viewModel.breedActive(this.value)
        }
    }



    setViewModel()
    listenChanges()
    setSelectActions()
    getBreeds()
})
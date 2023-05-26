function createAnimal(species,verbs,noise){
    return{
        species,
        [verbs](){
            return noise
        }
    }
}

const d=createAnimal("dog", "bark", "Woooof!")
console.log(d.bark())

const s=createAnimal("sheep", "bleet", "BAAAAaaaa")
console.log(s)
console.log(s.bleet())
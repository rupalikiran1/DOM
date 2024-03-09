// tagName
let byTagName = document.querySelector('h1')
console.log(byTagName)
// id
let byid = document.querySelector('#one')
console.log(byid)

// class
let byClass = document.querySelector('.two')
console.log(byClass)
//Attribute
//tagName[attribute = "value"]
let byAttribute = document.querySelector('h1[id = "one"]')
console.log(byAttribute)


byAttribute.addEventListener('click',function(){
    byAttribute.textContent = "bye"
    byAttribute.computedStyleMap.color = "blue"
    byAttribute.computedStyleMap.backgroundColor = "yellow"
})
//console.log(byAttribute.textContent)
//byAttribute.textContent = "bye"
//let info = {
    // firstName:"rupali",
    //lastName:"kotkar"
    //}
    //info['firstName'] = "parul"

    // console.log(info.firstName)
    // info.firstName = "parul"

    let info = {
        fullName:"rupali kotkar",
        parent:{
            mother:"lata kotkar",
            father:"Raybhan kotkar"
        }
    }
    console.log(info.parent.father)
    info.parent.father = "Raybhan s kotkar"

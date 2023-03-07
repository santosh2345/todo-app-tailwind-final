'use strict'

const todos = getFromLocalStorage()

const filters = {
	searchtext: '',
	hideCompleted: false
}
rendertodo(todos, filters)

document.querySelector('#searchtext').addEventListener('input', function (e) {
	filters.searchtext = e.target.value
	rendertodo(todos, filters)
})

// document.querySelector('#delete').addEventListener('click',function(){
// 	document.querySelectorAll('.note').forEach(function(note){
// 		note.remove()
// 	})
// })

document.querySelector('#new-todo').addEventListener('submit', function (e) {
	e.preventDefault()
	const title = e.target.elements.text.value.trim()
	if (title) {
	todos.push({
		id: uuidv4(),
		title, // this is es6 shorthand property it search for the variable title and write its value in after = "value ' place//title: e.target.elements.text.value,
		status: false
	})
	
		saveTodosToLocalStorage(todos)
		rendertodo(todos, filters)
		e.target.elements.text.value = ''
}

})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
	filters.hideCompleted = e.target.checked
	rendertodo(todos, filters)
})


// const lefttodo = todos.filter(function(todo){
// 	return !todo.status
// })


// const summery = document.createElement('h2')

// summery.textContent = ` you have ${lefttodo.length} todo left.`

// document.querySelector('body').appendChild(summery)


// todos.forEach(function(todo){
// 	const p = document.createElement('p')
// 	p.textContent = todo.title

// 	document.querySelector('body').appendChild(p)

// })



// document.querySelector('#new-todo').addEventListener('change',function(e){
// 	const t = document.createElement('p')
// 	t.textContent = e.target.value
// 	document.querySelector('#add-todo').addEventListener('click',function(){
// 		document.querySelector('body').appendChild(t)
// 	})
// })




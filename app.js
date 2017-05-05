let List = require('./models').List
let Task = require('./models').Task

// List.create({
//   name: 'Home',
//   completed: false
// }).then(function(list){
//   console.log(list.get())
//
//   return list.createTask({
//     name:'mow the lawn',
//     completed: false
//   })
// })
// .then(function(task){
//   console.log("New Task", task.get())
// }).catch(function(error){
//   console.log(error);
// })
//
//
// List.findById(1).then(return Task.create({
//   name: 'prep for meeting',
//   completed: false,
//   listId: 1
//   // WHERE (listId = 1)
//   return task.create
// }).then(function(task){
//   console.log("New Task", task.get())
// }).catch(function(error){
//   console.log(error);
// })


//
// List.findById(1).then(function(list){
//   console.log(list.get())
//
//   return list.createTask({
//     name:'clean room',
//     completed: false
//   })
// })
// .then(function(task){
//   console.log("New Task", task.get())
// }).catch(function(error){
//   console.log(error);
// })




List.create({
  name: 'Weekend',
  completed: true
}).then(function(list){
  console.log(list.get())

  return list.createTask({
    name:'buy new speedo',
    completed: true
  })
})
.then(function(task){
  console.log("New Task", task.get())
}).catch(function(error){
  console.log(error);
})

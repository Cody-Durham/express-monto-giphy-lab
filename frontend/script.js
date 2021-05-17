const giphs = document.querySelector('.giphs')
const submit = document.getElementById('submit')
const editSubmit = document.getElementById('submit-edit')
const deleteButton = document.getElementById('delete')

// Stores which item to edit/delete when the edit modal is up
let currentlyEditing = ''

function editModal (giph) {
  // Sets the edit modal to have the data from the giph clicked on
  $('#modal-edit').modal('open')
  const nameEdit = document.getElementById('name-edit')
  const urlEdit = document.getElementById('url-edit')

  nameEdit.value = giph.name
  urlEdit.value = giph.url

  currentlyEditing = giph._id
}

function addPictures (giphData) {
  // console.log(giphData);/////////////////////////////////////////////////////////////// nope
  // Adds all of the giphs to the dom
  giphs.innerHTML = ''
  giphData.forEach(giph => {
    if (!giph.url) return
    
    const imageNode = document.createElement('img')
    imageNode.setAttribute('src', giph.url)
    imageNode.classList.add('giph')
    
    imageNode.addEventListener('click', () => { editModal(giph) })
    
    giphs.appendChild(imageNode)
  })
  // console.log('anything dudeeeee); // this breaks the code and wount let me click when console.logging outside of the IF/
  // console.log(giph.url);/////////////////////////////////////////////////////////////// cant console.log this 
}
// console.log(addPictures);// this logs the addPictures function

axios.get('http://localhost:3000/giphs').then(response => {
  // gets the initial data
  addPictures(response.data)
  // console.log(response.data);
  // console.log('asd;lkfasdl;fajksdfl;aksdfja;lsdfjas')
})
// console.log(addPictures);
// console.log(axios);// loggs a weid for loop ive never seen before

editSubmit.addEventListener('click', (e) => {
  // submits the put request to edit a giph
  const name = document.getElementById('name-edit').value
  const url = document.getElementById('url-edit').value

  axios.put(`http://localhost:3000/giphs/${currentlyEditing}`, {
    name,
    url
  }).then((resp) => {
    // console.log(resp) // cant console.log this ...
    addPictures(resp.data)
    $('#modal-edit').modal('close')
  })
  // console.log(resp.data) //.... cant console.log this.. 
})

submit.addEventListener('click', (e) => {
  // submits the post request to create a new picture
  const name = document.getElementById('name').value
  const url = document.getElementById('url').value
  // console.log(name); // CAN console.log this!!!
  // console.log(url); // CAN console.log this!!!
  
  axios.post('http://localhost:3000/giphs', {
    name,
    url
  }).then((resp) => {
    addPictures(resp.data)
    // console.log('testing', resp.data.data); // nope.. cant console.log this either
    $('#modal-create').modal('close')
  })
  console.log('ask;dljfas;ldfkjasdl;fkasdfasdfas');
  // console.log(addPictures(resp.data));// nope.. this dosent log damnit. 
})
// console.log(post);// this breaks the code when logging here

deleteButton.addEventListener('click', (e) => {
  // deletes an image
  axios.delete(`http://localhost:3000/giphs/${currentlyEditing}`).then((resp) => {
    addPictures(resp.data)
    $('#modal-edit').modal('close')
  })
})

// initializes modal package
$('.modal').modal()
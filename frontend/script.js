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
  // console.log(giph.url);/////////////////////////////////////////////////////////////// nope
}

axios.get('http://localhost:3000/giphs').then(response => {
  // gets the initial data
  addPictures(response.data)
  console.log(response.data);
  console.log('asd;lkfasdl;fajksdfl;aksdfja;lsdfjas')
})

editSubmit.addEventListener('click', (e) => {
  // submits the put request to edit a giph
  const name = document.getElementById('name-edit').value
  const url = document.getElementById('url-edit').value

  axios.put(`http://localhost:3000/giphs/${currentlyEditing}`, {
    name,
    url
  }).then((resp) => {
    console.log(resp)
    addPictures(resp.data)
    $('#modal-edit').modal('close')
  })
})

submit.addEventListener('click', (e) => {
  // submits the post request to create a new picture
  const name = document.getElementById('name').value
  const url = document.getElementById('url').value
  // console.log(name);
  // console.log(url);
  
  axios.post('http://localhost:3000/giphs', {
    name,
    url
  }).then((resp) => {
    addPictures(resp.data)
    console.log('testing', resp.data);
    $('#modal-create').modal('close')
  })
  console.log(post);
})

deleteButton.addEventListener('click', (e) => {
  // deletes an image
  axios.delete(`http://localhost:3000/giphs/${currentlyEditing}`).then((resp) => {
    addPictures(resp.data)
    $('#modal-edit').modal('close')
  })
})

// initializes modal package
$('.modal').modal()
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}

const cafeList = document.querySelector('#cafe-list');
// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('div');
    li.classList ='row card';
    let link = document.createElement('embed');
    let mycontainer = document.createElement('div');
    mycontainer.className='mycontainer';
    mycontainer.id ='videodis';
    let vname = document.createElement('h4');
    li.setAttribute('data-id', doc.id);
    vname.textContent = doc.data().vname;
    link.src = doc.data().link;
    
    cafeList.appendChild(li);
    li.appendChild(link);
    li.appendChild(mycontainer);
    mycontainer.appendChild(vname);
  
}
{/*
  <img src="img_avatar.png" alt="Avatar" style="width:100%">
  <div class="mycontainer">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div> */}




// getting data
db.collection('cafe').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});
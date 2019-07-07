if('serviceWorker' in navigator){
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('service worker registered', reg))
    .catch(err => console.log('service worker not registered', err));
}

const cafeList = document.querySelector('#cafe-list');
// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('div');
    li.classList ='row card';
    let vname = document.createElement('h4');
    
    let line = document.createElement('hr');

    let link = document.createElement('embed');
    let mycontainer = document.createElement('div');
    mycontainer.className='mycontainer';
    mycontainer.id ='videodis';
    
    li.setAttribute('data-id', doc.id);
    vname.textContent = doc.data().vname;
   link.src = doc.data().link;
    
    cafeList.appendChild(li);
    li.appendChild(vname);
    vname.appendChild(line);
    li.appendChild(mycontainer);
    mycontainer.appendChild(link);
    }

    // getting data
db.collection('cafe').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});

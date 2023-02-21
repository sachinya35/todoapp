const addButton=document.querySelector('#add');

// updating local storage
const updateLSData=()=>{
    const textAreaData=document.querySelectorAll('textarea');
    const notes=[];
    console.log(textAreaData);

    textAreaData.forEach((note)=>{
        return notes.push(note.value)

    })
    console.log(notes);
    localStorage.setItem('notes',JSON.stringify(notes));


}
 
// adding notes through javascript  

const addNewNote=(text='')=>{
    const note=document.createElement('div');
    note.classList.add('note');

    const htmlData = '<div class="operation"><button class="edit"> <i class="fas fa-edit"> </i> </button><button class="delete"> <i class="fas fa-trash-alt"></i></button></div><div class="main"></div><textarea class="">  </textarea>';
    note.insertAdjacentHTML('afterbegin', htmlData );   
    
    
// getting note attributes

    const editButton=note.querySelector('.edit');
    const delButton=note.querySelector('.delete');
    const maindiv=note.querySelector('.main');
    const textArea=note.querySelector('textarea');
   
    
    

// deleting note

    delButton.addEventListener('click',()=>{
        note.remove();
        updateLSData();
    })
    textArea.value = text;
    maindiv.innerHTML=text;

// editing note

    editButton.addEventListener('click',()=>{ 
        maindiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden')
    })

 
    // putting elment in textarea

    
    textArea.addEventListener('change',(event)=>{
        const value=event.target.value;
        maindiv.innerHTML = value;

        updateLSData();
       

    })
    document.body.appendChild(note);


    

}

//   getting data

const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){ notes.forEach((note)=>addNewNote(note))

};



addButton.addEventListener('click',()=>addNewNote());


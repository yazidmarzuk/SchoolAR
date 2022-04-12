
//link is taken from "id" attribute and noun from "alt" attribute
var newURL="";
var facultyFrame=document.getElementById('fFrame');
var studentFrame=document.getElementById('sFrame');

function updateStudent(link)
{
    studentFrame.src=link;
    //facultyFrame.src=link;
}

function upload(link,noun){   
     
    //console.log('This works');
    //console.log(link);
    facultyFrame.src=link;
    //console.log(facultyFrame);
   ping(link,noun);
}

function ping(link,noun){    
    db.collection('changeListener').add({
        url: link,
        word: noun,
    });
    console.log('uploaded');
}
//Listening to real time pings
db.collection('changeListener').onSnapshot(snapshot=>{
    let changes = snapshot.docChanges();
    changes.forEach(change => {
      console.log(change.doc.data());   
      newURL=change.doc.data().url; 
      updateStudent(newURL);
      console.log(newURL);     
    });
})




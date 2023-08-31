const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InVzZXItdFRsbFMxNldua1hCaFpyVSIsImVtYWlsIjoic2Ftb2VsMTIzQGdtYWlsLmNvbSIsIm5hbWUiOiJzYW1vZWwiLCJpYXQiOjE2OTIyNzEzODB9.rE42Hst3Dn2C11TyUA4_TFntgyBZrQ1aJXoehdqMjSM"
const url = "https://notes-api.dicoding.dev/v1"

async function getActiveNotes(){
    const notes = await fetch(url+"/notes",{
        headers : {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${token}`
        }
    })
    const response = await notes.json()

    if(response.status !== 'success'){
        return {error : true, data:null}
    }
    return{error: false,data:response.data}
}

async function getArchivedNotes(){
    const notes = await fetch(url+"/notes/archived",{
        headers : {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${token}`
        }
    })
    const response = await notes.json()

    if(response.status !== 'success'){
        return {error : true, data:null}
    }
    return{error: false,data:response.data}
}

async function createActiveNotes({title,body}){
    const notes = await fetch(url+"/notes",{
        method : "POST",
        headers : {
            'Content-Type' : 'application/json',
            Authorization : `Bearer ${token}`
        },
        body : JSON.stringify({title,body})
    })
    const response = await notes.json()

    if(response.status !== 'success'){
        return {error : true, data:null}
    }
    return{error: false,data:response.data}
}
// getActiveNotes().then(e => console.log(e))
// getArchivedNotes().then(e => console.log(e))
createActiveNotes({title:"testi",body:"testi body"}).then(e => console.log(e))
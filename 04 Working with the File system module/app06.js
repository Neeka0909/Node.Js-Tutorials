//  more on file system module

const fs = require('fs');

// Create folder - mkdir
fs.mkdir('tutorial', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('folder created successfully');
        fs.writeFile('./tutorial/example.txt', '123', (err)=>{
            if(err)
                console.log(err);
            else{
                console.log('succefully created file');
            }
        }); 
    }

});

// Delete folder - rmdir
// first remove files inside folder
fs.unlink('./tutorial/example.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('File deleted successfully');
    }
});

fs.rmdir('tutorial', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Folder deleted succesully');
    }
}); 
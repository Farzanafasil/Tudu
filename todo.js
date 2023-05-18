


// code for log out
$('#logOut').on('click',(e)=>{
    e.preventDefault();
    // Sign-out successful.
    window.localStorage.removeItem('user');
    window.location="index.html";
    console.log('logout successfully');
})

// AJAX call to fetch data from API

getList=document.getElementById('getList');
getList.addEventListener('click',()=>{

       fetch('https://jsonplaceholder.typicode.com/todos').then((data)=>{
        return data.json();

       }).then((objectdata)=>{

        // const lists=res.data;
        console.log(objectdata[0].title);
        let tableData='';
       objectdata.map((el,index)=>{
           
             tableData+=
           
            `<tr >
            
            <td> ${el.userId}</td>
            <td> ${el.id}</td>
            <td> ${el.title}</td>
            <td><input type="checkbox" class="checkbox" ${el.completed,el.completed?' checked':''}/></td>
            
            </tr>`
        });
         $('#todoList').html(tableData);
        if(checkedCount)
        {

            checkedCount=0;
        }



       }).catch((err)=>{
        console.log('failed to fetch list data');

       })
       
    } )    
       



//variable to keep track of cheking list items
let checkedCount=0;

const alertPromise= ()=>{
     return new Promise((resolve,reject)=>{

         
        if(checkedCount===5){
            resolve(checkedCount)
        }
        else{
            reject('count not equal to 5');
        }
    });
}

const promiseCall=()=>{
    alertPromise().then((data)=>{
        alert(` We done ${data} activities today.... Congrats!`);
    })
    .catch((err)=>{
        console.log('promise rejected');
    })
}



$('#todoList').on('change','.checkbox',function(e){
    if($(this).prop('checked')===true){
        console.log('checked');
        checkedCount++; 
        $(this).parent().addClass('active');
    }
    else{
        checkedCount--;
        console.log('unchecked');
        $(this).parent().removeClass('active');
    }
    
    promiseCall();


});





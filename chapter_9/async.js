const gettodos=(resource)=>{

    return new Promise((resolve,reject)=>{
        const request=new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
//console.log(request,request.readyState)
if(request.readyState===4 && request.status===200)
{
    const data=JSON.parse(request.responseText);
    console.log(request,request.responseText);
   resolve(data);
}
else if(request.readyState===4)
{
    reject('error promise');
}
});

request.open('GET',resource);
request.send();
        
    });
    

}

gettodos('https://jsonplaceholder.typicode.com/todos/1').then(data=>{
    console.log('promise resolved',data);
    return gettodos('https://google.com/')
}).then(
    (data)=>{
        console.log('promise 2 resolved',data);
    }
).catch((err=>{
    console.log('promise rejected',err);
}));


//promise example

const getsomething=()=>{
    return new Promise((resolve,reject)=>{
        //resolve('some data');
        reject('some error');
    });
}

getsomething().then((data)=>{
    console.log(data);
},(err)=>{
    console.log(err);
});

getsomething().then((data)=>{
    console.log(data);

}).catch(err=>{
console.log(err);
})



//fetch
// console.log('hhhhhhhhh')
// fetch('https://jsonplaceholder.typicode.com/todos/1').then((response)=>{
// console.log('resolved',response);
// return response.json();
// }).then(data=>{
//     console.log(data);
// }).catch(()=>{
// console.log('rejected',err);
// });

//async function always return promise
const gettodoasync=async()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if(response.status!==200)
    {
        throw new Error('Cannot fetch the data');
    }
    const data=await response.json();
    console.log(response);
    console.log(data);
    return data;
}

gettodoasync().then((data)=>{
console.log('resolve await',data);
});



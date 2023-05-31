const getData = ()=>{
    const xhr = new XMLHttpRequest;
    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/');


    xhr.onload = ()=>{
        let data = xhr.response;
        console.log(JSON.parse(data));
    }
    xhr.onerror = ()=>{
        console.log(" have some error");
    }
    xhr.send();
}
getData();
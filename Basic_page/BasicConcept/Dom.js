const url="https://jsonplaceholder.typicode.com/users"
const xhr= new XMLHttpRequest();
xhr.open('GET',url,true)
xhr.onreadystatechange= ()=>{
    if(xhr.readyState===4 && xhr.status===200){
        const data=ResponseText
        document.write(data);
    }
}
xhr.send();
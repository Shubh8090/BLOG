let element= document.querySelector(".blog-container");

async function post(){
   try{
    let array=[];
    let data = await fetch("https://www.googleapis.com/blogger/v3/blogs/2399953?key=AIzaSyByqnWkLJt5R0YaxP3pu9Q-iwcc4eiju04")
    let response= await data.json();
    array.push(response);
    array.forEach((value)=>{
        element.innerHTML=`
            <div>Blog Kind:${value.kind}</div>
            <div>Blog Id:${value.id}</div>
            <div>Blog Name:${value.name}</div>
            <div>Blog Description:${value.description}</div>
            <div>Blog Published-On:${value.published}</div>
            <div>Blog Updated-On:${value.updated}</div>
            <a href="${value.url}" target="_blank">URL</a>
            <a href="${value.selfLink}" target="_blank">SELF LINK</a>
            <div>Total Posts:${value.posts.totalItems}</div>
            <a href="${value.posts.selfLink}" target="_blank">POSTS SELF LINK</a>
            <div>Total Pages:${value.pages.totalItems}</div>
            <a href="${value.pages.selfLink}" target="_blank">PAGES SELF LINK</a>
            <div>Total Language:${value.locale.language}</div>
        `
    })
   }catch(error){
    alert("Error")
   }
} 

post();
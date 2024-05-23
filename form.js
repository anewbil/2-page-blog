const userel=document.querySelector("#user-name")
const titleel=document.querySelector("#blog-title")
const contentel=document.querySelector("#content")
const buttonel=document.querySelector("#form-button")


function handleSubmitForm(event){
    event.preventDefault()
const savedBlogs=JSON.parse(localStorage.getItem("savedBlogs"))||[]
const newBlog={
    user:userel.value,
    title:titleel.value,
    content:contentel.value
}
if(titleel.value===""&&contentel.value===""&&userel.value===""){
alert("form must be filled")
}
else{
    savedBlogs.push(newBlog)
    localStorage.setItem("savedBlogs",JSON.stringify(savedBlogs))
    document.location.href="blog.html" 
}
}







buttonel.addEventListener("click",handleSubmitForm)
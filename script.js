const blogTitleInput = document.getElementById('blogTitle');
const blogContentInput = document.getElementById('blogContent');
const submitBtn= document.getElementById('submitBtn');
const blogList = document.getElementById('blog-list');
const titleMessageSpan= document.getElementById('titleMessage');
const contentMessageSpan = document.getElementById('contentMessageSpan');
const blogForm = document.getElementById('blog-form');
let editblogBtn, deleteblogBtn;
let blogTitle,blogContent;
let blogInfo=[];
let timestamp;




blogTitleInput.addEventListener('input',function(event){
    event.preventDefault();
    if(!validateField(blogTitleInput)){
        console.log('False');
        return;
    }else{
       
        console.log(blogTitle);
    }
});

blogContentInput.addEventListener('input',function(event){
    event.preventDefault();
    if(!validateField(blogContentInput)){
        return;
    }else{
       
        console.log(blogContent);
    }

});
function validateField(targetInput){
    
   if(!targetInput.validity.valid || targetInput.validity.valueMissing){
        const valid_error = targetInput.nextElementSibling;
        console.log(valid_error);
        valid_error.textContent = targetInput.validationMessage; 
        targetInput.classList.remove("valid");
        targetInput.classList.add("invalid");
        targetInput.focus();
    
        return false
    }else{
         console.log("no error.");
         const valid_error = targetInput.nextElementSibling;

        valid_error.textContent = targetInput.validationMessage; 
        targetInput.classList.remove("invalid");
        targetInput.classList.add("valid");
        targetInput.nextSibling.textContent = "";

        return true
    }
}
submitBtn.addEventListener('click',submitBlog);

function submitBlog(event){
    event.preventDefault()
    if(!validateField(blogTitleInput)|| (!validateField(blogContentInput))){
        console.log("Error submitting Form")
    }else{

        blogTitle = blogTitleInput.value;
        blogContent = blogContentInput.value;
        timestamp = new Date().toLocaleString();
        blogInfo.push({id:blogInfo.length+1,Title:blogTitle, Content:blogContent,Timestamp:timestamp});
        
        
        console.log(blogInfo);
        const blogItem = document.createElement('LI');
        const blogHeader = document.createElement('H2');
        blogHeader.style.fontSize="23px";
        blogHeader.textContent=blogTitle;
        const blogPara=document.createElement('P');
        blogPara.textContent= blogContent;
        editblogBtn = document.createElement('input');
        editblogBtn.type="button";
        editblogBtn.value='EDIT';
        deleteblogBtn = document.createElement('input');
        deleteblogBtn.type="button";
        deleteblogBtn.value='DELETE';
        blogItem.appendChild(blogHeader);
        blogItem.appendChild(blogPara);
        blogItem.appendChild(editblogBtn);
        blogItem.appendChild(deleteblogBtn);
        blogList.appendChild(blogItem);
        blogForm.reset();
        editblogBtn.addEventListener('click',editBlog);
        deleteblogBtn.addEventListener('click',deleteBlog);
    }

}



function editBlog(event){
    const item = event.target.parentNode;
    const formHeading = document.querySelector('h1');
    formHeading.innerText = "Edit Blog";
    const searchheader = item.querySelector('H2').innerText;
    blogTitleInput.value= searchheader;
    blogContentInput.value = item.querySelector('p').innerText;
    item.remove();
    //remove item from array
    for(let i=0;i<blogInfo.length-1;i++){
        if(searchheader===blogInfo[i].Title){
            const result=blogInfo[i];
            console.log(result);
            blogInfo.splice(i,1);

        }else{
            console.log("error")
            console.log(blogInfo[i].Title);
        }
    }

    
}
function deleteBlog(event){
    const item = event.target.parentNode;
    const searchheader = item.querySelector('H2').innerText;
    item.remove();
      for(let i=0;i<blogInfo.length-1;i++){
        if(searchheader===blogInfo[i].Title){
            const result=blogInfo[i];
            console.log(result);
            blogInfo.splice(i,1);

        }else{
            console.log("error")
            console.log(blogInfo[i].Title);
        }
    }

}


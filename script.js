const blogTitleInput = document.getElementById('blogTitle');
const blogContentInput = document.getElementById('blogContent');
const submitBtn= document.getElementById('submitBtn');
const blogList = document.getElementById('blog-list');
const titleMessageSpan= document.getElementById('titleMessage');
const contentMessageSpan = document.getElementById('contentMessageSpan');
const blogForm = document.getElementById('blog-form');
let editblogBtn;
let blogTitle,blogContent;
let BlogInfo=[];




blogTitleInput.addEventListener('input',function(event){
    event.preventDefault();
    if(!validateField(blogTitleInput)){
        console.log('False');
        return;
    }else{
        blogTitle = blogTitleInput.value;
        console.log(blogTitle);
    }
});

blogContentInput.addEventListener('input',function(event){
    event.preventDefault();
    if(!validateField(blogContentInput)){
        return;
    }else{
        blogContent = blogContentInput.value;
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
        BlogInfo.push({Title:blogTitle, Content:blogContent})
        const blogItem = document.createElement('LI');
        const blogHeader = document.createElement('H2');
        blogHeader.style.fontSize="23px";
        blogHeader.textContent=blogTitle;
        const blogPara=document.createElement('P');
        blogPara.textContent= blogContent;
        editblogBtn = document.createElement('input');
        editblogBtn.type="button";
        editblogBtn.value='EDIT';
        blogItem.appendChild(blogHeader);
        blogItem.appendChild(blogPara);
        blogItem.appendChild(editblogBtn);
        blogList.appendChild(blogItem);
        blogForm.reset();
    }

}

editblogBtn.addEventListener('click',editBlog);


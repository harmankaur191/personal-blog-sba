This project consists of index.html, style.css and script.js.
A blog-form containing input field for blog title and blog content is created along with a button. The user can enter the required text in the input fields and submit by clicking submit button. 
The submitted blog is displayed as a list each with a option to edit or delete. Once the user hits edit button, the title and the content is shown in the form which can be again submitted on submitting the form. With the delete button, the blog will be permanently deleted from the list and the array.
LocalStorage is used to store the blog information and generate the list even after refresshing the page.
Proper form validation are used to reflect user friendly error message.


//Challenges:

Editing and deleting the blog items from the list and reflecting same changes in the array was quite challenging which I was able to achieve by using loop and conditional statements. Additionally, storing a javascript array in  localStorage was complex and retrieving the values back from it to generate the list on page load was challenging. After using different ways and functiond, I was able to complete it.

At this time, no issues or features seems to be missing. However, more functionality or features can be added at a later point.
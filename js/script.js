/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
// Reference https://www.sitepoint.com/community/t/looping-through-li-elements-in-ul/6049/2

const studentList = document.querySelectorAll('.student-item');		// Getting List of all student
const studentsItems = document.getElementsByTagName('li');
const students = [].slice.call(studentList);
let page = 1;		// holding current page number
const numberOfStudents = students.length;		// total number of students
let pageSize = 10;



function showPage(list, page) {

	let pageNumber = (page-1) * pageSize;
	let nextPage = (pageNumber + pageSize);

	xArray = students.slice(pageNumber, nextPage);
	console.log(xArray);
	for (let i = 0; i < students.length; i += 1) {
		if (students[i] <= 10) {
			students[i].style.display = 'block';

		} else {
			students[i].style.display = 'none';
		}

		for (let i = 0; i <= xArray.length; i += 1) {
			if (xArray[i]) {
				xArray[i].style.display = 'block';
			}
		}
   }}

const appendPageLinks = (students) => {

		const numberOfPages = Math.ceil(numberOfStudents / pageSize);
		let mainDiv = document.querySelector('.page');
		let selector = document.createElement('div');
		let orderedList = document.createElement('ul');
		selector.classList.add("pagination");

		mainDiv.appendChild(selector);

		selector.appendChild(orderedList);



		for (let i = 1; i < numberOfPages+1; i++) {
			let listings = document.createElement("li");
			let links = document.createElement("a");
			links.textContent = i;
			links.href = "#";
			orderedList.appendChild(listings);
			listings.appendChild(links);
			const defaultActive = document.querySelector('a');
			defaultActive.className = 'active';


			links.addEventListener('click', (e) => {
				showPage(students, i);

				let livePage = document.getElementsByClassName('active');
				if (livePage.length > 0) {
					livePage[0].className = livePage[0].className.replace("active", "");
				}
            e.target.className = 'active';
            console.log(e.target)
			})
		}
	}

   showPage(students, page);
	appendPageLinks(students)

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/




/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.


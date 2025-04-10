// Get DOM references
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize the array with existing data from localStorage or an empty array
let chaptersArray = getChapterList() || [];

// Display any previously saved chapters
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Event listener for button click
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        displayList(input.value); // Add new chapter to list
        chaptersArray.push(input.value); // Push to array
        setChapterList(); // Save to localStorage
        input.value = ''; // Clear input
        input.focus(); // Refocus input
    }
});

// Function to display a chapter item in the list
function displayList(item) {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');

    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');

    li.append(deletebutton);
    list.appendChild(li);

    // Add delete behavior
    deletebutton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // Handle deletion
        input.focus();
    });
}

// Save chapters to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Retrieve chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Remove chapter from list and localStorage
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove ❌ symbol
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

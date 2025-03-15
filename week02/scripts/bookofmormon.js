

const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('______'); // you need to fill in the blank to refer

// Function to create a new list item with chapter and delete button
function addChapter() {
    const chapterTitle = input.value.trim();  // Get the input value and remove any extra spaces

    // Check if the input is not empty
    if (chapterTitle === "") {
        alert("Please enter a chapter title.");
        return;
    }

    // Create a new list item (li) for the chapter
    const li = document.createElement('li');

    // Add the chapter title to the li element
    li.textContent = chapterTitle;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete-btn');

    // Append the delete button to the li element
    li.append(deleteButton);

    // Append the li element to the list
    list.append(li);

    // Clear the input field after adding the chapter
    input.value = '';

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
        li.remove();  // Remove the chapter entry when the delete button is clicked
    });
}

// Add event listener to the button to add a chapter when clicked
button.addEventListener('click', addChapter);

// Optional: Add functionality to allow pressing "Enter" to add a chapter
input.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addChapter();
    }
});

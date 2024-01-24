function displayCategories() {
    // Get user-selected categories (you can replace these with your own logic)
    const category1 = prompt("Enter Category 1:");
    const category2 = prompt("Enter Category 2:");

    // Get the display element
    const categoryDisplay = document.getElementById("categoryDisplay");

    // Display categories with colorful animations
    categoryDisplay.innerHTML = `<span style="color: #ff5733">${category1}</span> and <span style="color: #33ff57">${category2}</span> selected!`;

    // You can add more animations or effects here
}

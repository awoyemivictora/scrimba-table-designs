// Get the "Select All" checkbox
const selectAllCheckbox = document.getElementById("select-all").querySelector('input');

// Get all the individual checkboxes
const itemCheckboxes = document.querySelectorAll(".select-item input");

// Add an event listener to the "Select All" checkbox
selectAllCheckbox.addEventListener("change", function () {
  itemCheckboxes.forEach(function (checkbox) {
    checkbox.checked = selectAllCheckbox.checked;
  });
});

// Add an event listener to the individual checkboxes
itemCheckboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    // If not all checkboxes are checked, uncheck the "Select All" checkbox
    if (!this.checked) {
      selectAllCheckbox.checked = false;
    } else {
      // If all checkboxes are checked, check the "Select All" checkbox
      const allChecked = Array.from(itemCheckboxes).every((item) => item.checked);
      selectAllCheckbox.checked = allChecked;
    }
  });
});

function editEmployee(employeeName) {
    alert('Editing employee: ' +employeeName );
}

function deleteEmployee(employeeName) {
    const confirmation = confirm('Are you sure you want to delete ' + employeeName + '?');
    if (confirmation) {
        alert('Employee ' + employeeName + ' deleted.');
    }
}

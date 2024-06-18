# Selection Widget

## Logical Conditions

- A list of already selected items is displayed (no more than three).
- By clicking on the "Change my choice" button, a dialog opens with:
  - A list of all elements (scrollable list of fixed height).
  - A search field and filter.
- Checkboxes of already selected items are checked, and the selected items are duplicated as blocks at the bottom of the dialog box.
- Search functionality:
  - As you type characters, the list of elements is filtered (using substring search).
- Additional filter (selectbox):
  - Filter by element number (> 10, > 50, > 100).
- Search and filter complement each other.
- You can select no more than three items:
  - When three items are selected, the remaining checkboxes become disabled.
- The selected items have a link "X" to remove the item from the list of selected items.
- Clicking the "Save" button:
  - Closes the dialog box.
  - Updates the list of selected items on the main page.
- Clicking the "Cancel" button:
  - Closes the dialog box.
  - The list of selected items on the main page remains unchanged.

## Technical Conditions

- ReactJS
- TypeScript

## Widget Concept

The widget should provide an intuitive interface for selecting items with the following features:
- Display a maximum of three selected items.
- Open a dialog for changing the selection, which includes search and filter functionalities.
- Ensure no more than three items can be selected at any time.
- Allow easy removal of selected items.
- Update or retain the selected items based on user actions.

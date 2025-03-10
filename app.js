// Defining the class
class PhoneBook {
    constructor() {
        if (!localStorage.getItem("contacts")) {
            this.contacts = [
                { name: "Harry Potter", phone: "111-111-1111", email: "harry@hogwarts.com" },
                { name: "Ronald Weasley", phone: "222-222-2222", email: "ronald@hogwarts.com" },
                { name: "Hermione Granger", phone: "333-333-3333", email: "hermione@hogwarts.com" },
                { name: "Draco Malfoy", phone: "444-444-4444", email: "draco@hogwarts.com" },
                { name: "Luna Lovegood", phone: "555-555-5555", email: "luna@hogwarts.com" },
                { name: "Severus Snape", phone: "666-666-6666", email: "severus@hogwarts.com" }
            ];
            this.saveToLocalStorage();
        } else {
            this.contacts = JSON.parse(localStorage.getItem("contacts"));
        }

        this.displayContacts();
    }

    // Method for saving contacts to local storage
    saveToLocalStorage() {
        localStorage.setItem("contacts", JSON.stringify(this.contacts));
    }
  
    // Method for adding contact
    addContact(name, phone, email) {
      this.contacts.push({ name, phone, email});
      this.saveToLocalStorage();
      this.displayContacts();
    }
  
    // Method for updating contact details
    updateContact(oldName, newName, newPhone, newEmail) {
        const contact = this.contacts.find(contact => contact.name === oldName);
        if (contact) {
            contact.name = newName;
            contact.phone = newPhone;
            contact.email = newEmail;
            this.saveToLocalStorage();
            this.displayContacts();
        }
    }
  
    // Method for deleting contact
    deleteContact(name) {
        this.contacts = this.contacts.filter(contact => contact.name !== name);
        this.saveToLocalStorage();
        this.displayContacts();
    }

    // Method to search for contacts
    search(query) {
        const lowerQuery = query.toLowerCase();
        return this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(lowerQuery) ||
            contact.phone.includes(query) ||
            contact.email.toLowerCase().includes(lowerQuery)
        );
    }

    // Method to display contacts dynamically
    displayContacts(filteredContacts = null) {
        const tableBody = document.getElementById("phonebook-entries");
        tableBody.innerHTML = "";

        const contactsToShow = filteredContacts || this.contacts;

        contactsToShow.forEach(contact => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>${contact.email}</td>
                <td>
                    <button class="btn btn-edit" onclick="editContact('${contact.name}')">Edit</button>
                    <button class="btn btn-delete" onclick="deleteContact('${contact.name}')">Delete</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }
}

const myPhoneBook = new PhoneBook();

// Event handling for form submissions
document.getElementById("phonebook-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !phone || !email) return;

    if (editingContactName) {
        myPhoneBook.updateContact(editingContactName, name, phone, email);
        editingContactName = null;
        document.getElementById("submit-btn").textContent = "Add Entry";
    } else {
        myPhoneBook.addContact(name, phone, email);
    }

    this.reset();
});

// Function to sort through contacts using the QuickSort algorithm
function quickSort(arr, key) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    const equal = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let a = arr[i][key];
        let b = pivot[key];

        if (typeof a === 'string' && typeof b === 'string') {
            if (a < b) left.push(arr[i]);
            else if (a > b) right.push(arr[i]);
            else equal.push(arr[i]);
        } else if (typeof a === 'number' && typeof b === 'number') {
            if (a < b) left.push(arr[i]);
            else if (a > b) right.push(arr[i]);
            else equal.push(arr[i]);
        } else {
            if (a == null) left.push(arr[i]);
            else if (b == null) right.push(arr[i]);
            else if (a < b) left.push(arr[i]);
            else if (a > b) right.push(arr[i]);
            else equal.push(arr[i]);
        }
    }

    equal.push(pivot);

    return [...quickSort(left, key), ...equal, ...quickSort(right, key)];
}

// Function to sort by name 
function sortByName() { 
    myPhoneBook.contacts = quickSort(myPhoneBook.contacts, "name");
    myPhoneBook.saveToLocalStorage();
    myPhoneBook.displayContacts(); 
} 
  
// Function to sort by phone number 
function sortByPhone() {
    myPhoneBook.contacts = quickSort(myPhoneBook.contacts, "phone");
    myPhoneBook.saveToLocalStorage();
    myPhoneBook.displayContacts(); 
}

// Function to sort by email
function sortByEmail() {
    myPhoneBook.contacts = quickSort(myPhoneBook.contacts, "email");
    myPhoneBook.saveToLocalStorage();
    myPhoneBook.displayContacts();
}

// Delete handler
function deleteContact(name) {
    myPhoneBook.deleteContact(name);
}

// Editing handler
let editingContactName = null;
function editContact(name) {
    const contact = myPhoneBook.contacts.find(contact => contact.name === name);
    if (contact) {
        document.getElementById("name").value = contact.name;
        document.getElementById("phone").value = contact.phone;
        document.getElementById("email").value = contact.email;
        editingContactName = contact.name;
        document.getElementById("submit-btn").textContent = "Update Contact";
    }
}

// Function for the search feature
document.getElementById("searchInput").addEventListener("input", function() {
    const query = this.value.trim();
    if (query) {
        myPhoneBook.displayContacts(myPhoneBook.search(query));
    } else {
        myPhoneBook.displayContacts();
    }
});
# Phone Book Application

## Overview

The **Phone Book Application** is a simple, interactive web app that allows users to add, edit, delete, and sort contacts. The contacts are stored locally in the user's browser using **localStorage**, ensuring the data is saved even after the page is refreshed.

This README will guide you through the installation process, explain the key features of the app, the structure of the code, and how to run the application.

## Table of Contents

1. [Installation Instructions](#installation-instructions)
2. [How to Run the Application](#how-to-run-the-application)
3. [App Purpose](#app-purpose)
4. [Function Descriptions](#function-descriptions)
5. [Data Structure Explanation](#data-structure-explanation)

---

## Installation Instructions

1. **Install a Live Server Extension**:
    To run the Phone Book Application locally on your computer, you’ll need a **live server**. This allows you to view the application in your web browser and see updates instantly.

    - If you are using **Visual Studio Code (VSCode)**, follow these steps:
      1. Open Visual Studio Code.
      2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the VSCode window.
      3. In the search box, type `Live Server` and press Enter.
      4. Click on **Install** for the "Live Server" extension by Ritwick Dey.
      5. Once installed, right-click on your `index.html` file in the VSCode file explorer and select **"Open with Live Server"**.
      6. This will open your Phone Book Application in your default web browser.

    **Alternative**: If you don’t use Visual Studio Code, you can use any other tool that allows you to open an HTML file in a local server. Alternatively, you can simply open `index.html` in your browser, though it might not reflect updates instantly.

2. **Setting up Local Storage**:
    The app stores contacts in the browser’s **localStorage**, so there’s no need for a backend server or database. The app will function entirely on your local machine.

---

## How to Run the Application

To run the Phone Book application, follow these steps:

1. **Clone the repository** (or download the files).
    - If you're using Git, run:
      ```bash
      git clone https://github.com/your-username/phone-book-app.git
      ```

2. **Open the project in Visual Studio Code (VSCode)** or another code editor of your choice.

3. **Install a Live Server** (if you don’t have it installed already). You can follow the instructions above to install the Live Server extension in VSCode.

4. **Open the `index.html` file**:
    - If you're using VSCode, right-click the `index.html` file and select **"Open with Live Server"**.
    - This will launch the app in your browser.

5. **Start interacting with the app**:
    - Add, edit, delete, and sort contacts.
    - Search for a contact by name, phone number, or email.

---

## App Purpose

This app serves as a **Phone Book** where users can manage a list of contacts. It includes the following features:

- **Add New Contact**: Users can input a name, phone number, and email for a new contact.
- **Edit Contact**: Users can update the information of an existing contact.
- **Delete Contact**: Users can delete contacts from the phone book.
- **Sort Contacts**: Users can sort contacts by **Name**, **Phone Number**, or **Email**.
- **Search Contacts**: Users can search for a contact based on the name, phone number, or email.

The app is designed to be simple and easy to use, and the data is stored in the browser to persist across sessions.

---

## Function Descriptions

Here’s a breakdown of each key function in the app:

1. **`saveToLocalStorage()`**:
   - **Purpose**: Saves the contacts array to the browser’s localStorage so the contacts remain even after the page is refreshed.
   - **How it works**: Converts the `contacts` array into a string using `JSON.stringify()` and stores it in `localStorage`.

2. **`addContact(name, phone, email)`**:
   - **Purpose**: Adds a new contact to the phone book.
   - **How it works**: Appends a new contact object (containing `name`, `phone`, and `email`) to the `contacts` array and saves it to localStorage.

3. **`updateContact(oldName, newName, newPhone, newEmail)`**:
   - **Purpose**: Updates an existing contact’s details (name, phone, or email).
   - **How it works**: Finds the contact by the old name, then updates the contact’s details with the new information.

4. **`deleteContact(name)`**:
   - **Purpose**: Deletes a contact from the phone book.
   - **How it works**: Filters the `contacts` array by excluding the contact with the given name and saves the updated list to localStorage.

5. **`search(query)`**:
   - **Purpose**: Searches for contacts by name, phone number, or email.
   - **How it works**: Filters the `contacts` array and returns contacts that match the search query (case-insensitive).

6. **`displayContacts(filteredContacts = null)`**:
   - **Purpose**: Displays the contacts on the page.
   - **How it works**: Iterates over the `contacts` array (or the filtered contacts) and creates rows in a table to display contact information. Each row includes options to edit or delete the contact.

7. **`quickSort(arr, key)`**:
   - **Purpose**: Sorts the contacts by a specified key (name, phone, or email) using the **QuickSort** algorithm.
   - **How it works**: Recursively divides the array into smaller arrays (left, right, equal) based on the pivot and sorts the contacts.

---

## Data Structure Explanation

The **contacts** data is represented as an **array of objects**. Each contact is an object with the following properties:

```js
{
  name: "Harry Potter",      // The name of the contact
  phone: "111-111-1111",     // The phone number of the contact
  email: "harry@hogwarts.com" // The email of the contact
}
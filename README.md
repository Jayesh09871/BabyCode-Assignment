# Student Dashboard Assignment

A React-based dashboard for managing a list of students. This project demonstrates listing, filtering, and adding students, with authentication via Firebase and persistent storage using localStorage.

## Features

- **View Students:** List all students with details (name, email, course, age).
- **Filter by Course:** Filter students by selected course.
- **Add Student:** Add a new student (requires login via Firebase Google Auth).
- **View Student Details:** View more info in a modal (requires login).
- **Authentication:** Google login via Firebase.
- **Mock API:** Uses axios-mock-adapter to simulate API calls and delay.
- **Persistence:** Student data is saved to localStorage, so it survives page reloads.
- **Responsive UI:** Built with Tailwind CSS for mobile and desktop.

## Getting Started

### Prerequisites
- Node.js and npm installed

### Setup
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Firebase Setup
- The app uses Firebase Authentication (Google provider).
- Update `src/firebase.js` with your own Firebase project credentials if needed.
- In the Firebase Console, enable the Google sign-in provider under **Authentication > Sign-in method**.

### Data Persistence
- All student data is stored in browser localStorage for this assignment.
- If you want to use a real backend (e.g., MongoDB), you would need to build an API and connect it accordingly.

## How to Use
1. **Login:** Click the login button (Google) in the header.
2. **Add Student:** Fill the form and submit (requires login).
3. **Filter:** Use the dropdown to filter students by course.
4. **View Details:** Click "View" next to a student (requires login).
5. **Persistence:** Refresh the page; your students remain!

## Bonus
- The app is designed for easy extension (edit/delete, backend integration).

## Screen Recording Instructions
1. Open the app in your browser.
2. Open Developer Tools (Inspect) and switch to the Network tab.
3. Start a screen recording.
4. Demonstrate:
   - Logging in
   - Adding a student
   - Filtering
   - Viewing details
   - Show network calls to Firebase
5. Save and upload your video as required.

---

**Assignment by Jayesh Kakhani**

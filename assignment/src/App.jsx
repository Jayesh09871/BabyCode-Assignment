import React, { useState } from 'react';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import Auth from './components/Auth';
import { auth } from './firebase';

export default function App() {
  const [filterCourse, setFilterCourse] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [user, setUser] = useState(auth.currentUser);
  const [refresh, setRefresh] = useState(0);

  // Listen for auth changes
  React.useEffect(() => {
    const unsub = auth.onAuthStateChanged(u => setUser(u));
    return unsub;
  }, []);

  // Available courses for filter (hardcoded for demo)
  const courses = ['Math', 'Science', 'History'];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white shadow">
        <h1 className="text-2xl font-bold text-blue-700">Student Dashboard</h1>
        <Auth user={user} setUser={setUser} />
      </header>
      <main className="flex-1 w-full max-w-4xl mx-auto p-4 space-y-6">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          <div>
            <label className="mr-2 font-medium">Filter by Course:</label>
            <select className="border rounded p-1" value={filterCourse} onChange={e => setFilterCourse(e.target.value)}>
              <option value="">All</option>
              {courses.map(c => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <StudentList filterCourse={filterCourse} onSelectStudent={id => setSelectedStudent(id)} refresh={refresh} />
        <StudentForm onStudentAdded={() => setRefresh(r => r + 1)} requireLogin={true} user={user} />
        {selectedStudent && (
          <StudentDetails id={selectedStudent} requireLogin={true} user={user} onClose={() => setSelectedStudent(null)} />
        )}
      </main>
      <footer className="text-center text-gray-400 p-2 text-xs">© 2025 Student Dashboard</footer>
    </div>
  );
}
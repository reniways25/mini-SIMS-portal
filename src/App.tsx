import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Attendance from "./pages/Attendance"
import Fees from "./pages/Fees"

type Student = { id: string; name: string; isPresent: boolean }
type Fee = { id: string; studentName: string; amount: number; isPaid: boolean }

function App() {
  const [students, setStudents] = useState<Student[]>([])
  const [fees, setFees] = useState<Fee[]>([])
  const [newFeeName, setNewFeeName] = useState('')
  const [newFeeAmount, setNewFeeAmount] = useState('')

  useEffect(() => {
  fetch('https://my-json-server.typicode.com/reniways25/mini-SIMS-portal/students')
    .then((res) => res.json())
    .then((data) => setStudents(data))
}, [])

useEffect(() => {
  fetch('https://my-json-server.typicode.com/reniways25/mini-SIMS-portal/fees')
    .then((res) => res.json())
    .then((data) => setFees(data))
}, [])

 function toggleStudent(id: string) {
  const student = students.find((s) => s.id === id)
  if (!student) return
  const updatedIsPresent = !student.isPresent
  fetch(`https://my-json-server.typicode.com/reniways25/mini-SIMS-portal/students/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isPresent: updatedIsPresent }),
  }).then(() => {
    setStudents(students.map((s) => (s.id === id ? { ...s, isPresent: updatedIsPresent } : s)))
  })
}

  function toggleFee(id: string) {
  const fee = fees.find((f) => f.id === id)
  if (!fee) return
  const updatedIsPaid = !fee.isPaid
  fetch(`https://my-json-server.typicode.com/reniways25/mini-SIMS-portal/fees/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isPaid: updatedIsPaid }),
  }).then(() => {
    setFees(fees.map((f) => (f.id === id ? { ...f, isPaid: updatedIsPaid } : f)))
  })
}

  function addFee() {
    fetch('https://my-json-server.typicode.com/reniways25/mini-SIMS-portal/fees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ studentName: newFeeName, amount: Number(newFeeAmount), isPaid: false }),
    })
      .then((res) => res.json())
      .then((newFee) => {
        setFees([...fees, newFee])
        setNewFeeName('')
        setNewFeeAmount('')
      })
  }

  function deleteFee(id: string) {
  fetch(`https://my-json-server.typicode.com/reniways25/mini-SIMS-portal/fees/${id}`, {
    method: 'DELETE',
  }).then(() => {
    setFees(fees.filter((f) => f.id !== id))
  })
}
  return (
    <BrowserRouter>
      <div className="flex flex-col md:flex-row min-h-screen bg-background text-foreground">
        <aside className="w-full md:w-64 bg-sidebar text-sidebar-foreground p-4 md:p-6 md:flex md:flex-col md:justify-between border-r border-sidebar-border">
          <div>
            <h1 className="text-xl font-semibold mb-8">Mini-SIMS</h1>
            <nav className="flex flex-col gap-1 mt-2">
              <Link to="/" className="px-3 py-2 rounded-lg hover:bg-sidebar-accent text-sm">Dashboard</Link>
              <Link to="/attendance" className="px-3 py-2 rounded-lg hover:bg-sidebar-accent text-sm">Attendance</Link>
              <Link to="/fees" className="px-3 py-2 rounded-lg hover:bg-sidebar-accent text-sm">Fees</Link>
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard presentCount={students.filter(s => s.isPresent).length} totalStudents={students.length} />} />
            <Route path="/attendance" element={<Attendance students={students} onToggle={toggleStudent} />} />
            <Route
              path="/fees"
              element={
                <Fees
                  fees={fees}
                  onToggle={toggleFee}
                  newFeeName={newFeeName}
                  setNewFeeName={setNewFeeName}
                  newFeeAmount={newFeeAmount}
                  setNewFeeAmount={setNewFeeAmount}
                  onAddFee={addFee}
                  onDeleteFee={deleteFee}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
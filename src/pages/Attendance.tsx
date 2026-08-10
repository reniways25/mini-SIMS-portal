import AttendanceItem from "../components/AttendanceItem"

type Student = { id: string; name: string; isPresent: boolean }

type Props = {
  students: Student[]
  onToggle: (id: string) => void
}

function Attendance({ students, onToggle }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">Attendance</h2>
      <div className="flex flex-col gap-2 w-full max-w-md">
        {students.map((student) => (
          <AttendanceItem
            key={student.id}
            name={student.name}
            isPresent={student.isPresent}
            onToggle={() => onToggle(student.id)}
          />
        ))}
      </div>
      <p className="px-1 pt-3 text-sm text-muted-foreground">
        {students.filter((s) => s.isPresent).length} of {students.length} present
      </p>
    </div>
  )
}

export default Attendance
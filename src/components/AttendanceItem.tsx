import { Card, CardContent } from "@/components/ui/card"

type AttendanceItemProps = {
  name: string
  isPresent: boolean
  onToggle: () => void
}

function AttendanceItem({ name, isPresent, onToggle }: AttendanceItemProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <span className="font-medium">{name}</span>
        <button
          type="button"
          onClick={onToggle}
          className={`px-4 py-1.5 rounded-full text-sm font-medium ${
            isPresent
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground"
          }`}
        >
          {isPresent ? "Present" : "Absent"}
        </button>
      </CardContent>
    </Card>
  )
}

export default AttendanceItem
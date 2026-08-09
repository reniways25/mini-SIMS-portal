import DashboardCard from "../components/Dashboardcard"

type Props = {
  presentCount: number
  totalStudents: number
}

function Dashboard({ presentCount, totalStudents }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">Dashboard</h2>
      <div className="flex flex-wrap gap-4 mb-8 items-start">
        <DashboardCard title="Fees due" value="$500" highlight />
        <DashboardCard title="Attendance rate" value="92%" />
        <DashboardCard title="Next Class" value="Math, 10am" />
        <DashboardCard title="Notifications" value="4" />
      </div>
      <p className="text-sm text-muted-foreground">
        {presentCount} of {totalStudents} present today
      </p>
    </div>
  )
}

export default Dashboard
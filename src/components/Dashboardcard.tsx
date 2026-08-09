import { Card, CardContent } from "@/components/ui/card"

type DashboardCardProps = {
  title: string
  value: string
  highlight?: boolean
}

function DashboardCard({ title, value, highlight = false }: DashboardCardProps) {
  return (
    <Card className={highlight ? "bg-primary text-primary-foreground" : ""}>
      <CardContent className="p-6">
        <p className={`text-sm mb-2 ${highlight ? "opacity-80" : "text-muted-foreground"}`}>
          {title}
        </p>
        <p className="text-3xl font-bold">{value}</p>
      </CardContent>
    </Card>
  )
}

export default DashboardCard
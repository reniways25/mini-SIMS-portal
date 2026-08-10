import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import FeeItem from "../components/FeeItem"

type Fee = { id: string; studentName: string; amount: number; isPaid: boolean }

type Props = {
  fees: Fee[]
  onToggle: (id: string) => void
  onDeleteFee: (id: string) => void
  newFeeName: string
  setNewFeeName: (v: string) => void
  newFeeAmount: string
  setNewFeeAmount: (v: string) => void
  onAddFee: () => void

}

function Fees({ fees, onToggle, onDeleteFee, newFeeName, setNewFeeName, newFeeAmount, setNewFeeAmount, onAddFee }: Props) {
  const chartData = [
    { name: "Paid", count: fees.filter((f) => f.isPaid).length },
    { name: "Unpaid", count: fees.filter((f) => !f.isPaid).length },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-4">Fees</h2>

      <div style={{ width: "100%", height: 200 }} className="mb-6 max-w-md">
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#e4e4e7" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-2 mb-4 max-w-md">
        <Input placeholder="Student name" value={newFeeName} onChange={(e) => setNewFeeName(e.target.value)} className="flex-1" />
        <Input type="number" placeholder="Amount" value={newFeeAmount} onChange={(e) => setNewFeeAmount(e.target.value)} className="flex-1" />
        <Button type="button" onClick={onAddFee}>Add Fee</Button>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-md">
        {fees.map((fee) => (
          <FeeItem
            key={fee.id}
            studentName={fee.studentName}
            amount={fee.amount}
            isPaid={fee.isPaid}
            onToggle={() => onToggle(fee.id)}
            onDelete={() => onDeleteFee(fee.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default Fees
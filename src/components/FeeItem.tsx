import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { generateReceipt } from "@/lib/generateReceipts"

type FeeItemProps = {
  studentName: string
  amount: number
  isPaid: boolean
  onToggle: () => void
  onDelete: () => void
}

function FeeItem({ studentName, amount, isPaid, onToggle, onDelete }: FeeItemProps) {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-4">
        <div>
          <p className="font-medium">{studentName}</p>
          <p className="text-sm text-muted-foreground">${amount}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => generateReceipt(studentName, amount, isPaid)}
          >
            Receipt
          </Button>
          <button
            type="button"
            onClick={onToggle}
            className={`px-4 py-1.5 rounded-full text-sm font-medium ${
              isPaid
                ? "bg-foreground text-background"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {isPaid ? "Paid" : "Unpaid"}
          </button>
          <button type="button" onClick={onDelete} className="text-muted-foreground hover:text-destructive text-sm px-2">
            ✕
          </button>
        </div>
      </CardContent>
    </Card>
  )
}

export default FeeItem
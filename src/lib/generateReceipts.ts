import jsPDF from "jspdf"

export function generateReceipt(studentName: string, amount: number, isPaid: boolean) {
  const doc = new jsPDF()

  doc.setFontSize(18)
  doc.text("Mini-SIMS Fee Receipt", 20, 20)

  doc.setFontSize(12)
  doc.text(`Student: ${studentName}`, 20, 40)
  doc.text(`Amount: $${amount}`, 20, 50)
  doc.text(`Status: ${isPaid ? "Paid" : "Unpaid"}`, 20, 60)
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 70)

  doc.save(`receipt-${studentName.replace(" ", "_")}.pdf`)
}
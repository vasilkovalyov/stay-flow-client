import {
  Badge,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui';

const INVOICES = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: '$250.00' },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: '$150.00' },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: '$350.00' },
];

export function CardTableSection() {
  return (
    <div className="space-y-[35px]">
      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Card</h3>
        <Card className="max-w-[336px]">
          <CardHeader>
            <CardTitle>Team plan</CardTitle>
            <CardDescription>Manage billing and seats for your workspace.</CardDescription>
            <CardAction>
              <Badge>Active</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Your team is currently on the Pro plan with 12 of 20 seats used.
            </p>
          </CardContent>
          <CardFooter className="gap-[7px] border-t pt-(--card-spacing)">
            <Button variant="outline" size="sm">
              Manage seats
            </Button>
            <Button size="sm">Upgrade</Button>
          </CardFooter>
        </Card>
      </div>

      <div className="space-y-[14px]">
        <h3 className="font-semibold text-muted-foreground">Table</h3>
        <Table>
          <TableCaption>A list of recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {INVOICES.map((row) => (
              <TableRow key={row.invoice}>
                <TableCell className="font-semibold">{row.invoice}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.method}</TableCell>
                <TableCell className="text-right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$750.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}

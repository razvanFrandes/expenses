import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function App() {
  const [totalSpent, setTotalSpent] = useState(0);

  useEffect(() => {
    async function fetchTotal() {
      const response = await fetch("/api/expenses/total-spent");
      const data = await response.json();
      setTotalSpent(data.total);
    }
    fetchTotal();
  }, []);

  return (
    <>
      <Card className="w-[350px] mx-auto">
        <CardHeader>
          <CardTitle>Total spend</CardTitle>
          <CardDescription>The total amount you've spent</CardDescription>
        </CardHeader>
        <CardContent>{totalSpent}</CardContent>
      </Card>
    </>
  );
}

export default App;

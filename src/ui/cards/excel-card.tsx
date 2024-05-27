import {
    Sheet
  } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function ExcelCard() {
  return (
    <Card className="max-w">
      <CardContent className="mt-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
              <Sheet className="w-12 h-12 mr-2"/>
            <div>
              <p className="text-sm font-medium leading-none">Excel</p> 
              <p className="text-sm text-muted-foreground">Send your typeform responses to Excel online. Turn feedback into graphs, and so much more.</p>
            </div>
          </div>
          <Button className="ml-auto">
                Connect{" "}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
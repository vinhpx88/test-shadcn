
import {
    FileSpreadsheet
  } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
} from "@/components/ui/card"

export function SheetCard() {
  return (
    <Card className="max-w">
      <CardContent className="mt-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <FileSpreadsheet className="w-12 h-12 mr-2"/>
            <div>
              <p className="text-sm font-medium leading-none">Google Sheet</p> 
              <p className="text-sm text-muted-foreground">Send your data straight to Google Sheet. Automatically syncs as results come in.</p>
            </div>
          </div>
          <Button className="ml-auto">
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
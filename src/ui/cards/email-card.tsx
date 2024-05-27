import { EnvelopeClosedIcon } from "@radix-ui/react-icons"

import {
    Check,
  } from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function EmailCard() {
  return (
    <Card className="max-w">
      <CardContent className="mt-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
              <EnvelopeClosedIcon className="w-12 h-12 mr-2"/>
            <div>
              <div className="text-sm font-medium leading-none">Email <Badge className="mx-2" variant="secondary">Active <Check className="ml-2" color="green"/></Badge></div> 
              <p className="text-sm text-muted-foreground">Receive an email every time user submit their answer</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
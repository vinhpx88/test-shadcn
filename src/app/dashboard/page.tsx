import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { EmailCard } from "@/ui/cards/email-card";
import { SheetCard } from "@/ui/cards/sheet-card";
import { ExcelCard } from "@/ui/cards/excel-card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePickerWithRange } from "@/ui/dashboard/date-picker-with-range";
import { Card, CardHeader, CardTitle, CardContent, CardDescription} from "@/components/ui/card";
import { OverviewCard } from "@/ui/dashboard/overview-card";
import { TableCard } from "@/ui/dashboard/table-card";
import { ModeToggle } from "./mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-12 py-6">
      <Tabs defaultValue="connect" className="h-full space-y-6">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="create" className="relative" disabled>
              Create
            </TabsTrigger>
            <TabsTrigger value="connect" className="relative">
              Connect
            </TabsTrigger>
            <TabsTrigger value="share" className="relative" disabled>
              Share
            </TabsTrigger>
            <TabsTrigger value="results">Results</TabsTrigger>
          </TabsList>
          <div className="absolute right-5">
            <ModeToggle/>
          </div>
        </div>
        <TabsContent
          value="connect"
          className="border-none outline-none *:py-2"
        >
          <div className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <form>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
          </div>
          <div>
            <EmailCard />
          </div>
          <div>
            <SheetCard />
          </div>
          <div>
            <ExcelCard />
          </div>
        </TabsContent>
        <TabsContent
          value="results"
          className="h-full flex-col border-none p-0 data-[state=active]:flex"
        >
          <div className="flex items-center justify-between">
            <div className="space-y-1 w-full">
              <Tabs defaultValue="datetime" className="h-full space-y-6">
                <div className="space-between flex items-center">
                  <TabsList>
                    <TabsTrigger value="datetime" className="relative">
                      <DatePickerWithRange />
                    </TabsTrigger>
                    <TabsTrigger value="day-28" className="relative">
                      28 days
                    </TabsTrigger>
                    <TabsTrigger value="day-14" className="relative" disabled>
                      14 days
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent
                  value="datetime"
                  className="border-none outline-none space-y-4"
                >
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Revenue
                        </CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$45,231.89</div>
                        <p className="text-xs text-muted-foreground">
                          +20.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Subscriptions
                        </CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">
                          +180.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <path d="M2 10h20" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">
                          +19% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Active Now
                        </CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                          +201 since last hour
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle className="text-1xl font-semibold">Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <OverviewCard />
                      </CardContent>
                    </Card>
                    <Card className="col-span-4">
                      <CardContent>
                        <TableCard />
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                {/* Tab content for page day-28 */}
                <TabsContent
                  value="day-28"
                  className="border-none outline-none space-y-4"
                >
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Revenue
                        </CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">$85,331.89</div>
                        <p className="text-xs text-muted-foreground">
                          +120.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Subscriptions
                        </CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+4589</div>
                        <p className="text-xs text-muted-foreground">
                          +350.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <rect width="20" height="14" x="2" y="5" rx="2" />
                          <path d="M2 10h20" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+142,234</div>
                        <p className="text-xs text-muted-foreground">
                          +49% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Active Now
                        </CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                          +3001 since last month
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-8">
                    <Card className="col-span-4">
                      <CardHeader>
                        <CardTitle className="text-1xl font-semibold">Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="pl-2">
                        <OverviewCard />
                      </CardContent>
                    </Card>
                    <Card className="col-span-4">
                      <CardContent>
                        <TableCard />
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </main>
  );
}

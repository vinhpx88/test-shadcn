"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Children } from "react";
import { ResponsiveContainer } from "recharts";

const datas = [
  {
    screens: "start",
    screenViews: "13",
    rate: "60%",
    exits: "6",
  },
  {
    screens: "marketing channel",
    screenViews: "2",
    rate: "40%",
    exits: "2",
  },
  {
    screens: "start",
    screenViews: "13",
    rate: "60%",
    exits: "6",
  },
  {
    screens: "marketing channel",
    screenViews: "2",
    rate: "40%",
    exits: "2",
  },
  {
    screens: "start",
    screenViews: "13",
    rate: "60%",
    exits: "6",
  },
  {
    screens: "marketing channel",
    screenViews: "2",
    rate: "40%",
    exits: "2",
  }
];

export function TableCard() {
  return (
    <ResponsiveContainer width="100%">
      <Table className="h-[180px]">
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20px]">#</TableHead>
            <TableHead className="w-[160px]">
              <small>screens</small>
            </TableHead>
            <TableHead>
              <small>screen views</small>
            </TableHead>
            <TableHead>
              <small>exits</small>
            </TableHead>
            <TableHead>
              <small>Drop-off rate</small>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-xs text-muted-foreground">
          {datas.map((data, index) => (
            <TableRow key={index} className="odd:bg-secondary/20">
              <TableCell>{index + 1}</TableCell>
              <TableCell>{data.screens}</TableCell>
              <TableCell>{data.screenViews}</TableCell>
              <TableCell>{data.exits}</TableCell>
              <TableCell>{data.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </ResponsiveContainer>
  );
}

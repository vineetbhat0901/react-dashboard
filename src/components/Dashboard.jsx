import React from "react";
import { Link } from "react-router-dom";
import DashboardStatGrid from "./DashboardStatGrid";
import TransactionChart from "./TransactionChart";

export default function Dashboard() {
    return (
        <div className="flex gap-4">
            <DashboardStatGrid/>
            <TransactionChart/>
        </div>
    )    
}

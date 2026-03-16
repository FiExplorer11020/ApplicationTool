"use client";

import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartData = [
  { semaine: "S1", candidatures: 5 },
  { semaine: "S2", candidatures: 7 },
  { semaine: "S3", candidatures: 4 },
  { semaine: "S4", candidatures: 9 }
];

export function WeeklyApplicationsChart() {
  return (
    <div className="h-60">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData}>
          <XAxis dataKey="semaine" />
          <YAxis />
          <Area type="monotone" dataKey="candidatures" stroke="#4338ca" fill="#c7d2fe" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

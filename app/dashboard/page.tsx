import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dashboardStats, nextActions } from "@/lib/data/mock";
import { ApplicationQuickForm } from "@/components/forms/application-quick-form";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const chartData = [
  { semaine: "S1", candidatures: 5 },
  { semaine: "S2", candidatures: 7 },
  { semaine: "S3", candidatures: 4 },
  { semaine: "S4", candidatures: 9 }
];

export default function DashboardPage() {
  return (
    <AppShell>
      <PageHeader title="Cockpit de recherche" description="Priorités, pipeline et actions intelligentes" cta="Capture rapide" />
      <ApplicationQuickForm />
      <div className="mt-6 grid gap-4 md:grid-cols-4">
        {dashboardStats.map((stat) => (
          <Card key={stat.label}>
            <p className="text-sm text-slate-500">{stat.label}</p>
            <p className="text-2xl font-semibold">{stat.value}</p>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <h2 className="mb-3 text-sm font-semibold">Tendance hebdomadaire</h2>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <XAxis dataKey="semaine" />
                <YAxis />
                <Area type="monotone" dataKey="candidatures" stroke="#4338ca" fill="#c7d2fe" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card>
          <h2 className="mb-3 text-sm font-semibold">Next best actions</h2>
          <div className="space-y-2">
            {nextActions.map((action) => (
              <div key={action} className="rounded-lg border border-slate-200 p-2 text-sm">
                {action} <Badge className="ml-2">urgent</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

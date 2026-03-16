import Link from "next/link";
import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

const companies = [
  { id: "1", name: "Lazard", sector: "M&A", geo: "Paris", score: 95 },
  { id: "2", name: "Ardian", sector: "Private Equity", geo: "Paris", score: 93 }
];

export default function CompaniesPage() {
  return (
    <AppShell>
      <PageHeader title="Company CRM" description="Firm intelligence + contexte complet" cta="Ajouter une entreprise" />
      <div className="grid gap-4 md:grid-cols-2">
        {companies.map((company) => (
          <Card key={company.id}>
            <Link href={`/companies/${company.id}`} className="text-lg font-semibold text-brand-700">{company.name}</Link>
            <p className="text-sm text-slate-600">{company.sector} · {company.geo}</p>
            <p className="mt-2 text-sm">Score de pertinence: {company.score}/100</p>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}

import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function DocumentsPage() {
  return (
    <AppShell>
      <PageHeader title="Documents" description="CV, lettres, prep notes et fichiers cloud Supabase" cta="Uploader un document" />
      <Card>Espace fichiers + versions liées à candidatures.</Card>
    </AppShell>
  );
}

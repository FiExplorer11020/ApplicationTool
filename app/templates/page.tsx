import { AppShell } from "@/components/layout/app-shell";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";

export default function TemplatesPage() {
  return (
    <AppShell>
      <PageHeader title="Templates" description="Messages LinkedIn, emails, merci, follow-up" cta="Nouveau template" />
      <Card>Bibliothèque de snippets avec tags et favoris.</Card>
    </AppShell>
  );
}

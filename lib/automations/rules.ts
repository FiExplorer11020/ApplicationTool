import { differenceInDays, parseISO } from "date-fns";

export type RuleTask = { title: string; dueDate?: string; linkedEntityType: string; linkedEntityId: string };

export function createFollowUpTaskFromApplication(application: { id: string; company: string; followUpDate?: string | null }): RuleTask | null {
  if (!application.followUpDate) return null;
  return {
    title: `Relancer ${application.company}`,
    dueDate: application.followUpDate,
    linkedEntityType: "application",
    linkedEntityId: application.id
  };
}

export function createTaskFromInteraction(interaction: { id: string; nextAction?: string | null; nextActionDueDate?: string | null }): RuleTask | null {
  if (!interaction.nextAction) return null;
  return {
    title: interaction.nextAction,
    dueDate: interaction.nextActionDueDate ?? undefined,
    linkedEntityType: "interaction",
    linkedEntityId: interaction.id
  };
}

export function isStaleRelationship(lastInteractionDate: string | null, thresholdDays = 14): boolean {
  if (!lastInteractionDate) return true;
  return differenceInDays(new Date(), parseISO(lastInteractionDate)) >= thresholdDays;
}

export function isStaleApplication(updatedAt: string, thresholdDays = 10): boolean {
  return differenceInDays(new Date(), parseISO(updatedAt)) >= thresholdDays;
}

export function suggestNextAction(status: string): string {
  const map: Record<string, string> = {
    "target identified": "Trouver un contact alumni pour warm intro",
    "to apply": "Personnaliser CV + lettre et postuler",
    applied: "Planifier relance J+5",
    "follow-up due": "Envoyer relance concise avec valeur ajoutée",
    "interview 1": "Préparer fit + technicals 45 min",
    offer: "Comparer offres et négocier calendrier"
  };
  return map[status] ?? "Revoir notes et définir la prochaine action";
}

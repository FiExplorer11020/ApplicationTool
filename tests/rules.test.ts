import { describe, expect, it } from "vitest";
import { createFollowUpTaskFromApplication, createTaskFromInteraction, suggestNextAction } from "@/lib/automations/rules";

describe("automations rules", () => {
  it("creates follow-up task from application", () => {
    const result = createFollowUpTaskFromApplication({ id: "1", company: "Lazard", followUpDate: "2026-03-20" });
    expect(result?.title).toContain("Lazard");
  });

  it("creates interaction task when next action exists", () => {
    const result = createTaskFromInteraction({ id: "2", nextAction: "Envoyer merci" });
    expect(result?.title).toBe("Envoyer merci");
  });

  it("suggests action based on status", () => {
    expect(suggestNextAction("applied")).toContain("relance");
  });
});

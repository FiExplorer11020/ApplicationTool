export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      companies: { Row: { id: string; user_id: string; name: string; sector: string | null; geography: string | null; target_score: number | null; created_at: string; updated_at: string }; Insert: Omit<Database["public"]["Tables"]["companies"]["Row"], "id" | "created_at" | "updated_at"> & { id?: string; created_at?: string; updated_at?: string }; Update: Partial<Database["public"]["Tables"]["companies"]["Insert"]> };
      applications: { Row: { id: string; user_id: string; company_id: string | null; role_title: string; internship_type: string | null; location: string | null; status: string; priority: string; follow_up_date: string | null; deadline: string | null; source: string | null; date_applied: string | null; is_stale: boolean; created_at: string; updated_at: string }; Insert: Omit<Database["public"]["Tables"]["applications"]["Row"], "id" | "created_at" | "updated_at" | "is_stale"> & { id?: string; created_at?: string; updated_at?: string; is_stale?: boolean }; Update: Partial<Database["public"]["Tables"]["applications"]["Insert"]> };
      contacts: { Row: { id: string; user_id: string; full_name: string; company_id: string | null; role: string | null; relationship_strength: number | null; last_interaction_date: string | null; next_follow_up_date: string | null; warmth: string; created_at: string; updated_at: string }; Insert: Omit<Database["public"]["Tables"]["contacts"]["Row"], "id" | "created_at" | "updated_at"> & { id?: string; created_at?: string; updated_at?: string }; Update: Partial<Database["public"]["Tables"]["contacts"]["Insert"]> };
      tasks: { Row: { id: string; user_id: string; title: string; due_date: string | null; priority: string; status: string; linked_entity_type: string | null; linked_entity_id: string | null; created_at: string; updated_at: string }; Insert: Omit<Database["public"]["Tables"]["tasks"]["Row"], "id" | "created_at" | "updated_at"> & { id?: string; created_at?: string; updated_at?: string }; Update: Partial<Database["public"]["Tables"]["tasks"]["Insert"]> };
    };
  };
};

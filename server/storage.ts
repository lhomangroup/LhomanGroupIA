import { contactSubmissions, type ContactSubmission, type InsertContact } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class DatabaseStorage implements IStorage {
  private requireDb() {
    if (!db) {
      throw new Error("DATABASE_URL is not set; database functionality is disabled.");
    }
    return db;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const [contact] = await this.requireDb()
      .insert(contactSubmissions)
      .values({
        ...insertContact,
        company: insertContact.company || null,
        projectType: insertContact.projectType || null,
      })
      .returning();
    return contact;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return await this.requireDb().select().from(contactSubmissions);
  }
}

export const storage = new DatabaseStorage();

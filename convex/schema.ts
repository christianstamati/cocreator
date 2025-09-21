import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
  }),

  documents: defineTable({
    name: v.string(),
    tasks: v.id("tasks"),
  }),
});

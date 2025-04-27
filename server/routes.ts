import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "../shared/schema";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body against the contact form schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Add timestamp and store the submission
      const submission = await storage.createContactSubmission({
        ...validatedData,
        createdAt: new Date().toISOString(),
      });
      
      // Return success response
      res.status(201).json({
        message: "Contact form submitted successfully",
        submission
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        res.status(400).json({
          message: "Validation failed",
          errors: error.errors
        });
      } else {
        // Handle other errors
        console.error("Contact form submission error:", error);
        res.status(500).json({
          message: "An error occurred while processing your request"
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

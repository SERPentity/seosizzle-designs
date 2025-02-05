import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ConstructionSubmission {
  id: string;
  pdfUrl: string;
  clientEmail?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
    const { id, pdfUrl, clientEmail }: ConstructionSubmission = await req.json();

    const emailResponse = await resend.emails.send({
      from: "Lovable <onboarding@resend.dev>",
      to: ["info@serpentity.co.uk"],
      subject: "New Construction Website Submission",
      html: `
        <h1>New Construction Website Submission</h1>
        <p>A new submission has been received with ID: ${id}</p>
        <p>View the PDF: <a href="${pdfUrl}">Download PDF</a></p>
        ${clientEmail ? `<p>Client Email: ${clientEmail}</p>` : ''}
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify(emailResponse), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
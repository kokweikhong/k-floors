import { sendEmail } from "@/utils/send-email";
import { render } from "@react-email/render";
import ContactUsEmailTemplate from "@/components/ContactUsEmailTemplate";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const emailTemplate = render(<ContactUsEmailTemplate data={body} />);
  await sendEmail({
    to: process.env.TO_EMAIL,
    subject: "New Enquiry Request From k-floorings",
    html: emailTemplate,
  });
  return new Response("Sample Request Email Sent!");
}

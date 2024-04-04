import { sendEmail } from "@/utils/send-email";
import { render } from "@react-email/render";
import SampleEmailTemplate from "@/components/SampleEmailTemplate";

export async function POST(request) {
  const body = await request.json();
  console.log(body);
  const emailTemplate = render(<SampleEmailTemplate data={body} />);
  await sendEmail({
    to: process.env.TO_EMAIL,
    subject: "New Sample Request From k-floorings",
    html: emailTemplate,
  });
  return new Response("Sample Request Email Sent!");
}

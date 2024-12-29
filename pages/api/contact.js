import { GraphQLClient, gql } from "graphql-request";
import nodemailer from "nodemailer";

const hygraph = new GraphQLClient(
  "https://ap-south-1.cdn.hygraph.com/content/cm56bxd7p035g07wepkz10imi/master",
  {
    headers: {
      Authorization: `Bearer ${process.env.HYGRAPH_API_TOKEN}`,
    },
  }
);

const createSubmissionMutation = gql`
  mutation CreateContactFormSubmission(
    $name: String!
    $email: String!
    $message: String!
  ) {
    createContactFormSubmission(
      data: { name: $name, email: $email, message: $message }
    ) {
      id
    }
  }
`;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // Save submission to Hygraph
      await hygraph.request(createSubmissionMutation, {
        name,
        email,
        message,
      });

      // Create a transporter using SMTP
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: true, // Use `true` for port 465, `false` for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `Amit Deka <${process.env.SMTP_USER}>`,
        to: "amitdeka49@gmail.com",
        subject: "New Contact Form Submission",
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: "Submission successful." });
    } catch (error) {
      console.error("Error handling contact form submission:", error);
      res.status(500).json({ error: "Submission failed." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

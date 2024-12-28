# Contact Form Component with API Integration

This is a **Contact Form** component designed for my portfolio website. It is built with **React** and uses **ShadCN UI** components for styling and **Toast Notifications** for feedback. The form collects a user's name, email, and message, which are then sent to a backend API for processing. The form also integrates with **Hygraph (GraphCMS)** for storing submissions and **Nodemailer** to send email notifications.

## Features

- **Contact Form**: Collects the user's name, email, and message.
- **API Integration**: Form submissions are processed by an API endpoint.
- **Toast Notifications**: Success and error feedback displayed using ShadCN Toast.
- **Email Notifications**: Sends a notification email upon successful form submission.
- **Responsive Design**: Mobile-friendly form layout.

## Technologies Used

- **React**: Frontend framework.
- **ShadCN UI**: UI components for the form and toast notifications.
- **GraphQL**: Used for submitting form data to Hygraph (GraphCMS).
- **Node.js**: Backend for processing form data.
- **Nodemailer**: Sends email notifications upon form submission.

## Installation

To integrate this contact form into your project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/contact-form.git
   cd contact-form
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env.local` file in the root directory:

   ```env
   HYGRAPH_API_TOKEN=your-hygraph-api-token
   SMTP_HOST=your-smtp-host
   SMTP_PORT=your-smtp-port
   SMTP_USER=your-smtp-username
   SMTP_PASSWORD=your-smtp-password
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser at `http://localhost:3000`.

## Folder Structure

```plaintext
├── components/
│   ├── ContactMe.jsx    // Contact form component
│   ├── ui/              // ShadCN UI components (Input, Button, Label, etc.)
├── pages/
│   ├── api/
│   │   ├── contact.js   // API handler for form submissions
├── .env.local           // Environment variables (not included in the repo)
├── README.md            // Project documentation
```

## Usage

### Contact Form

- The form collects the user’s name, email, and message, and sends this data to a backend API.

### API Handler

- The API endpoint `pages/api/contact.js` handles the form data, saves it to **Hygraph** (GraphCMS), and sends an email notification using **Nodemailer**.

### Toast Notifications

- Upon submission, a toast notification displays a success or error message, notifying the user of the form submission status.

## Customization

- **API Integration**: Modify the `pages/api/contact.js` file to integrate with a different backend or service.
- **Toast Feedback**: Customize the success or error messages shown in the toast notifications.

## Deployment

Once ready for production, you can build and deploy your application:

1. Build the application for production:

   ```bash
   npm run build
   ```

2. Start the production server:

   ```bash
   npm start
   ```

3. Deploy to platforms like **Vercel**, **Netlify**, or **AWS**.

## Contributing

If you would like to contribute to this project:

1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

## License

This project is licensed under the **MIT License**.

---

## Acknowledgments

- **ShadCN UI**: For providing UI components used in this form.
- **GraphQL Request**: For easy integration with Hygraph.
- **Nodemailer**: For sending email notifications on form submissions.

For more information or issues, feel free to reach out. 🚀

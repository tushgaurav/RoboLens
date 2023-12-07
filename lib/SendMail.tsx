import { Resend } from "resend";
import UserSignupTemplate from "@/components/Emails/UserSignupTemplate"


const resend = new Resend(process.env.RESEND_API_KEY);

export async function TestMail() {
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'tushar.gaurav416@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    });
    return "Mail Sent";
}

export async function SendMail(to: string, subject: string, react: any) {
    await resend.emails.send({
        from: 'you@example.com',
        to: to,
        subject: subject,
        react: react,
    })
}

export async function UserSignUpMail(to: string) {
    const subject = "Welcome to RoboLens Booth";

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'tushar.gaurav416@gmail.com',
        subject: 'Welcome to Resend',
        react: <UserSignupTemplate firstName="Tushar" lastName="Shristi" />,
    });

}
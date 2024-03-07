import { EmailTemplate } from '@/components/Emails/SendPhotoTemplate';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();
  const name = body.name;
  const email = body.email;
  const urls = body.urls;

  try {
    const data = await resend.emails.send({
      from: 'cclick <hi@updates.cclick.click>',
      to: [email],
      subject: 'Here are your photos! 📸',
      react: EmailTemplate({ 'name': name, "urls": urls }),
    } as any);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

interface EmailTemplateProps {
    name: string;
    urls: string[];
}

const openingLines = [
    "Dear",
    "Hello",
    "Hi",
    "Greetings",
];

const closingLines = [
    "Best regards,",
    "Sincerely,",
    "Warm regards,",
    "Yours faithfully,",
];

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    name,
    urls
}) => {
    const opening = openingLines[Math.floor(Math.random() * openingLines.length)];
    const closing = closingLines[Math.floor(Math.random() * closingLines.length)];

    return (
        <div>
            <h1>{opening} {name},</h1>
            <p>We hope this email finds you well.</p>

            <p>Thank you for using our service. We're pleased to provide you with the download links for the images you captured through our website.</p>

            {/* Download Links for each image */}
            {urls.map((url, index) => (
                <div key={index}>
                    <a href={url}>Download Image {index + 1}</a>
                </div>
            ))}

            <p>If you encounter any issues or have any questions, please don't hesitate to contact us. We're here to help!</p>

            <p>{closing}<br />Orangewood Labs</p>
        </div>
    );
};
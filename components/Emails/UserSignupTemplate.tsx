import logo from "./logo.png"

export default function UserSignupTemplate({ firstName, lastName }: { firstName: string, lastName: string }) {
    const companyName = "RoboLens Department";

    // Array of random, funny robot quotes
    const robotQuotes = [
        "Why did the robot go on a diet? It had too many bytes!",
        "I asked a robot to clean my room. It said, 'I'm not your Roomba!'",
        "What do robots do after a breakup? They Ctrl+Z their ex.",
        "Why did the robot apply for a job? It wanted byte-sized pay!",
        "How do you comfort a robot? You oil its joints!",
        "Why did the robot turn red? It saw the motherboard!",
    ];

    // Select a random quote
    const randomQuote = robotQuotes[Math.floor(Math.random() * robotQuotes.length)];

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1 style={styles.title}>Welcome to RoboLens!</h1>
            </div>

            <div style={styles.content}>
                <p>Hi {firstName} {lastName}!</p>
                <p>Thank you for choosing Orangewood Labs&apos; RoboLens Booth.</p>

                <p>We are thrilled to welcome you to our community of innovators in the field of AI-enabled 6-axis Industrial robots. Your commitment to modern manufacturing and automation aligns perfectly with our mission to make collaborative robots accessible, safe, and user-friendly for businesses and individuals alike.</p>

                <p>As a valued member, we invite you to explore the capabilities of RoboLens Booth, our cutting-edge web app designed to capture photos and videos seamlessly from the camera mounted on the robot arm. This revolutionary tool is set to redefine the boundaries of robotics in modern manufacturing, and we are excited to have you on board.</p>

                <p>Your feedback is crucial in shaping the future of industrial automation, and together, we can bring the power of Orangewood Labs&apos; robotic arms to every factory floor. If you have any questions, concerns, or ideas, feel free to reach out to our dedicated support team at support@orangewoodlabs.com.</p>

                <p>And here&apos;s a little robot humor for you: &quot;{randomQuote}&quot;</p>

                <p>Thank you for being a part of the future of automation with Orangewood Labs. We look forward to witnessing the incredible impact your contributions will make in the world of industrial robotics.</p>

                <p>Best Regards,</p>
                <p>Orangewood Labs Team</p>
                <p>{companyName}</p> {/* You can include the company name dynamically */}
            </div>
        </div>
    )
}

const styles = {
    container: {
        background: '#f5f5f5',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: 'auto',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
    },
    logo: {
        width: '50px',
        marginRight: '10px',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
    },
    content: {
        background: '#fff',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
};

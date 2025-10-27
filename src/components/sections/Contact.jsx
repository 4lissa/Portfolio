import { useState } from "react"
import emailjs from "emailjs-com"
import Title from "../ui/Title"
import Card from "../ui/Card"
import TextField from "../ui/TextField"
import Button from "../ui/Button"

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus("");

        const templateParams = {
            name,
            email,
            message,
        };

        emailjs
            .send(
                "service_n1xmlhn",
                "template_6hfd0bd",
                templateParams,
                "PfIA1MQS0JHhZ75Yz"
            )
            .then(
                () => {
                    setStatus("Message sent successfully!");
                    setName("");
                    setEmail("");
                    setMessage("");
                    setTimeout(() => {
                        setStatus("");
                    }, 3000);
                },
                (error) => {
                    console.error("Error", error);
                    setStatus("Error sending message. Try again later.");
                    setTimeout(() => {
                        setStatus("");
                    }, 3000);
                }
            )
            .finally(() => setIsSending(false));
    };

    return (
        <div className="relative flex items-center justify-center flex-col gap-7 min-h-screen px-7">
            <Title>Let's get in touch˙⋆✮</Title>
            <Card className="bg-sky w-full items-center max-w-lg md:max-w-xl">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 items-center w-full">
                    <TextField
                        value={name}
                        onChange={setName}
                        placeholder="Enter your name"
                        type="text"
                        required
                    />
                    <TextField
                        value={email}
                        onChange={setEmail}
                        placeholder="Enter your email"
                        type="email"
                        required
                    />
                    <TextField
                        value={message}
                        onChange={setMessage}
                        placeholder="Write your message here..."
                        multiline
                        rows={7}
                        required
                    />
                    <Button type="submit" disabled={isSending}>
                        {isSending ? "Sending..." : "Send"}
                    </Button>
                    {status && (
                        <p className="text-sm">{status}</p>
                    )}
                </form>
            </Card>
        </div>
    )
}

export default Contact

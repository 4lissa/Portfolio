import { Link } from "react-router-dom"
import Title from "../ui/Title";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Jobboard from "../projects/Jobboard";

function Work() {
    return (
        <div className="relative flex items-center justify-center flex-col gap-7 min-h-screen px-7">
            <Title>My work ⋆｡°✩</Title>
            <Link to="/Jobboard" className="rounded-3xl max-w-lg md:max-w-xl transition-transform duration-150 ease-out hover:scale-105 active:scale-95">
                <Card
                    imgSrc="/projects/jobboard.png"
                    alt="Jobboard project"
                    className="bg-lavender max-w-lg md:max-w-xl"
                >
                    <h3 className="text-xl">Job board</h3>
                    <p className="text-sm">
                        A full-stack web platform for managing job listings, featuring a PostgreSQL database, a React-based interface, a RESTful API with CRUD operations, an authentication system and an admin dashboard.
                    </p>
                    <div className="flex flex-row flex-wrap gap-3">
                        <Badge>Rust</Badge>
                        <Badge>React.js</Badge>
                        <Badge>PostgreSQL</Badge>
                    </div>
                </Card>
            </Link>
        </div>
    )
}

export default Work

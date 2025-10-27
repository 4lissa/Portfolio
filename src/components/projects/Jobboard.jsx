import Title from "../ui/Title"

function Jobboard() {
    return (
        <div className="relative flex flex-col gap-7 min-h-screen">
            <img
                src="/projects/jobboard.png"
                alt="Jobboard project"
                className="w-full"
            />
            <div className="px-7 max-w-lg md:max-w-3xl mx-auto leading-loose">
                <div className="py-5 md:py-9 font-semibold text-charcoal md:flex md:flex-row md:gap-3 md:justify-center md:items-center">
                    <Title>JOB BOARD</Title>
                    <h3>— Full Stack Job Platform</h3>
                </div>
                <div className="pb-7 md:flex md:flex-row md:text-center md:gap-9">
                    <p className="flex-1 md:flex md:flex-col md:flex-shrink"><span className="font-semibold text-charcoal">Category : </span>Web Development · Full Stack</p>
                    <p className="flex-1 md:flex md:flex-col"><span className="font-semibold text-charcoal">Duration : </span>2 weeks · September 2025</p>
                    <p className="flex-1 md:flex md:flex-col"><span className="font-semibold text-charcoal">Team : </span>3 developers</p>
                    <p className="flex-1 md:flex md:flex-col"><span className="font-semibold text-charcoal">Technologies : </span>Rust · React.js · PostgreSQL</p>
                </div>
                <div className="py-7 border-t-2">
                    <h3 className="text-lg text-silver font-semibold pb-3">PROJECT OVERVIEW</h3>
                    <p>
                        A full-stack web platform connecting job seekers and recruiters through a responsive, user-friendly interface.<br />
                        The goal was to create a complete job management system including job listings, companies, applications, authentication, and an admin dashboard.<br />
                        The project combines Rust for backend performance and React for a dynamic frontend, delivering a secure and efficient web experience.
                    </p>
                </div>
                <div className="py-7 border-t-2">
                    <h3 className="text-lg text-silver font-semibold pb-3">DEVELOPMENT</h3>
                    <p>
                        The project follows a collaborative architecture, with responsibilities divided across backend, frontend, and database :
                    </p>
                    <ul className="list-disc list-inside">
                        <li>The backend handles API requests, implements CRUD operations, and enforces authentication and role-based access</li>
                        <li>The frontend dynamically displays job and company listings, allows users to apply, and provides an admin interface for managing content</li>
                        <li>The PostgreSQL database stores all persistent data including advertisements, companies, users, and applications</li>
                    </ul>
                    <p>
                        This architecture ensures the platform is scalable, maintainable, and high-performing.
                    </p>
                </div>

                <div className="py-7 border-t-2">
                    <h3 className="text-lg text-silver font-semibold pb-3">KEY LEARNINGS</h3>
                    <p>
                        Through this project, I strengthened my skills in :
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Integrating a RESTful API with a modern frontend</li>
                        <li>Handling CRUD operations and secure authentication flows</li>
                        <li>Connecting frontend and backend data seamlessly</li>
                        <li>Understanding database structure and data integrity</li>
                        <li>Collaborating effectively in a small agile team using Git and GitHub, including branching, merging, and code reviews</li>
                    </ul>
                    <p>
                        It gave me hands-on experience with full-stack development, system architecture, and the practical challenges of building a complete web platform from scratch.
                    </p>
                </div>

                <div className="py-7 mb-7 border-t-2">
                    <h3 className="text-lg text-silver font-semibold pb-3">OUTCOME</h3>
                    <p>
                        A functional and efficient job platform featuring :
                    </p>
                    <ul className="list-disc list-inside">
                        <li>Full CRUD management for advertisements, companies, users, and applications</li>
                        <li>Secure login and role-based authentication</li>
                        <li>Admin dashboard for managing advertisements, companies, users, and applications</li>
                        <li>Dynamic and user-friendly React interface</li>
                        <li>High-performance backend in Rust</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Jobboard

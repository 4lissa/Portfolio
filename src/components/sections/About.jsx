import Title from "../ui/Title"
import Card from "../ui/Card"
import Badge from "../ui/Badge"
import Button from "../ui/Button"

function About() {
    return (
        <div className="relative flex items-center justify-center flex-col gap-7 min-h-screen px-7 mt-20">
            <Title>About me ｡ꪆৎ˚⋅</Title>
            <Card
                className="bg-blush max-w-lg md:max-w-xl"
                imgSrc="/default-profile.png"
                alt="Profile picture"
            />
            <Card className="bg-sky items-center max-w-lg md:max-w-xl">
                <p className="text-sm leading-loose">
                    I’m Alissa — I explore how human understanding and technology can work together.<br /><br />
                    I began my journey studying Social and Organizational Psychology at Université Lumière Lyon 2, where I learned how people interact, collaborate, and make decisions within complex systems. This foundation led me to explore how technology can complement human capabilities through thoughtful design and data-driven innovation.<br /><br />
                    Today, I’m pursuing a Master of Science at EPITECH Paris, specializing in Development, AI, and Data, where I translate human insights into technical solutions.<br /><br />
                    My experiences, from supporting students in coding at Algorithmics to coordinating digital innovation projects at SINGA Lyon, have strengthened my ability to connect analytical thinking with empathy, collaboration, and creativity.
                </p>
                <Button href="/curriculum-vitae.pdf" download>See my CV</Button>
            </Card>
            <Card className="bg-silver items-center max-w-lg md:max-w-xl">
                <h3>Competencies</h3>
                <div className="flex flex-row flex-wrap gap-3">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>SQL</Badge>
                    <Badge>Python</Badge>
                    <Badge>Java</Badge>
                    <Badge>PHP</Badge>
                    <Badge>React.js</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>Node.js</Badge>
                </div>
            </Card>
            <Card className="bg-lavender items-center max-w-lg md:max-w-xl">
                <h3>Hobbies</h3>
                <div className="flex flex-row flex-wrap gap-3">
                    <Badge>Travel</Badge>
                    <Badge>Cultural exploration</Badge>
                    <Badge>Drawing</Badge>
                    <Badge>Creative hobbies</Badge>
                    <Badge>Hiking</Badge>
                    <Badge>Climbing</Badge>
                </div>
            </Card>
        </div>
    )
}

export default About

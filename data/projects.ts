import "../screen-shots/dashboard-light.png"

type ProjectsTypes = {
    id: number,
    title: string,
    description: string,
    image: string,
    tech: string[],
    links: {
        live: string,
        code: string,
    },    
}[]

export const projects:ProjectsTypes = [
    {
        id: 1,
        title: "Control Panel",

        description: "This dashboard is designed for teams that need to track customers, monitor orders, and understand what’s happening in their business. The goal is to reduce friction, display the right information, and turn raw data into something usable. It’s the kind of interface that saves time and mental energy.",

        image: "/projects/dashboard-dark.png",
        tech: ["Next.js", "TypeScript", "Tailwind", "Shadcn/ui", "Zustand"],

        links: {
            live: "https://control-panel-tzqy.vercel.app",
            code: "https://github.com/VictorSouzaCode/Control-Panel?tab=readme-ov-file"
        },
    },
    {
        id: 2,
        title: "Splash Paint",

        description: "Splash Paint is a lightweight drawing app built for people who just want to create without friction. It removes the clutter and hesitation that often come with creative tools. The goal is simple: make drawing feel immediate, intuitive, and enjoyable again.",

        image: "/projects/Splash-paint-2.png",
        tech: ["React.js", "TypeScript", "Tailwind", "Redux", "Canvas"],

        links: {
            live: "https://splash-paint.vercel.app/",
            code: "https://github.com/VictorSouzaCode/Splash-Paint"
        },
    }
]
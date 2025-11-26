import image_1 from '../images/p1.webp'
import image_2 from '../images/p2.webp'
import image_3 from '../images/p3.webp'
import image_4 from '../images/p4.webp'
import image_5 from '../images/p5.webp'

export interface Member {
  id:number;
  photo: string;
  name: string;
  designation: string;
  para_short?:string;
  para_1?: string;
  para_2?: string;
  para_3?: string;
  badge: string;
  badge_color: "red" | "purple"| "green"| "amber" |"blue";
}

export const memberDetails:Member[] =[
    {
        id:1,
        photo:image_1,
        name : "Shanil Wijewardena",
        designation:"Co-Founder / Growth, Technology & Finance Director",
        para_short:"Shanil is the brains, calculator, and turbocharger behind Pure Velocity. A lifelong Apple loyalist...",
        para_1:"Shanil is the brains, calculator, and turbocharger behind Pure Velocity. A lifelong Apple loyalist who breaks into hives at the sight of Android, Shanil lives in a world of KPIs, strategic roadmaps, and MacBook-fuelled late nights.",
        para_2:"With over a decade of running multiple businesses, Shanil can build systems with one hand and analyse a P&L with the other — all while talking about Autopilot quirks, battery health, or the next Tesla he’s planning to resurrect.",
        para_3:"If Pure Velocity were a Tesla, Shanil is the,",
        badge:"autopilot",
        badge_color:'red',
    },
    {
        id:2,
        photo:image_2,
        name:"Dilin Arambewela",
        designation:"Co-Founder / Growth, Sales & Operations Director",
        para_short:"Dilin is the sales powerhouse of Pure Velocity — a man who could sell...",
        para_1:"Dilin is the sales powerhouse of Pure Velocity — a man who could sell snow to the Swiss and convince an Android user to love… well, Android (because he certainly won’t be switching to Apple anytime soon).",
        para_2:"With years of entrepreneurial experience, Dilin brings business instincts sharper than a Model S Plaid launch. He builds partnerships, unlocks revenue streams, and somehow always manages to close a deal before the customer even finishes their sentence.",
        para_3:"If Pure Velocity were a Tesla, Dilin is the",
        badge:"ludicrous mode boost.",
        badge_color:"amber",
    },
    {
        id:3,
        photo:image_3,
        name:"Sanjeev Dassanayake",
        designation:"Managing Director",
        para_short:"Sanjeev is the steady engine that keeps Pure Velocity moving. With 20+ years...",
        para_1:"Sanjeev is the steady engine that keeps Pure Velocity moving. With 20+ years of business experience and a lifelong obsession with cars, he runs the workshop, now Sri Lanka’s best Tesla repair centre.",
        para_2:"He leads the service team, maintains quality, and gives customers the confidence that their Teslas aren’t just being repaired… they’re being understood. He’s part businessman, part mechanic whisperer, part deal-maker.",
        para_3:"If Pure Velocity were a service centre, Sanjeev is the",
        badge:"dyno room",
        badge_color:"blue",
    },
    {
        id:4,
        photo:image_4,
        name:"Dinesh Wijewardena",
        designation:"Servicing & Finance Manager",
        para_short:"Dinesh is the man who can look at a ledger and instantly spot a missing rupee...",
        para_1:"Dinesh is the man who can look at a ledger and instantly spot a missing rupee from a kilometre away. With deep automotive knowledge and impeccable organisation, he’s the guardian of inventory, finances, and service standards at PV.",
        para_2:"He tracks every part, washer, bolt, labour hour, and bank balance, and demands the same discipline from everyone around him. If there’s something to be recorded, Dinesh has already filed it… alphabetically.",
        para_3:"If Pure Velocity were an engine bay, Dinesh is the",
        badge:"neatly routed wiring loom",
        badge_color:"green",
    },
    {
        id:5,
        photo:image_5,
        name:"Rukshan Hewage",
        designation:"Sales, Support & Administration Manager",
        para_short:"Rukshan may not know much about cars (yet), but he knows everything...",
        para_1:"Rukshan may not know much about cars (yet), but he knows everything about hard work, loyalty, customer service, and showing up. Whether it's answering hotline calls, updating Trello, handling customers, or managing content, he’s the all-rounder every great business needs.",
        para_2:"With a smile on standby and a work ethic that won’t quit, he’s quickly becoming the unexpected star of Tesla customer support in Sri Lanka.",
        para_3:"If Pure Velocity were a car interior, Rukshan is the",
        badge:"wireless charger. Always ready, always reliable",
        badge_color:"purple",
    },
]



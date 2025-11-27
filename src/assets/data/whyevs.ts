export interface WhyEv {
    id:number;
    title:string;
    desc_1?:string;
    points_1:string[];
    desc_2:string;
    desc_3?:string;
    points_2?:string[];
    bg:string;
}

export const whyevs:WhyEv[] = [
    {   
        id:1,
        title:"EVs Are Cheaper to Run — By a Mile Say goodbye to",
        points_1:["Oil changes","Spark plugs","Radiators","Timing belts","Gearbox issues"],
        desc_2:"Your Tesla has fewer moving parts, meaning:",
        points_2:["Less maintenance","Fewer breakdowns","Lower long-term cost"],
        bg:"bg-[#0a0f2d]/95",    
    },

    { 
        id:2, 
        title:"EVs Are Better for the Planet",
        points_1:["No tailpipe","No fuel burning","No fumes" ],
        desc_2:"in your garage.EVs produce far fewer lifetime emissions, even when charged from mixed energy sources.Mother Nature approves.",
        bg:"bg-[#0a0f2d]/85", 
    },
    
    {
        id:3, 
        title:"Performance That Petrol Can’t Match",
        points_1:["Instant torque","Silent acceleration","Smooth power delivery"],
        desc_2:"A Tesla can outrun most petrol cars without breaking a sweat — including some icons Sri Lankans adore 👀.",
        bg:"bg-[#0a0f2d]/75",
    },

    {
        id:4,
        title:"Less Maintenance = Less Headache, EVs have:",
        points_1:[ "No engine","No gearbox","No exhaust","No oil leaks","No crankshaft drama","No overheating on Colombo–Kandy climbs"],
        desc_2:"Your biggest maintenance item ? Tyres and windshield washer fluid.",
        bg:"bg-[#0a0f2d]/65",
    },

    {
        id:5,
        title:"Safer Than You Think",
        desc_1:"EVs are engineered with:",
        points_1:["Low rollover risk","Bigger crumple zones","Lower centre of gravity","Advanced driver-assist features"],
        desc_2:"Teslas consistently rank among the safest cars on the planet.",
        bg:"bg-[#0a0f2d]/55",
    },

    {
        id:6,
        title: "EVs Make Sense for Sri Lanka",
        points_1:["Fuel price fluctuations? Not your problem","Stop-and-go traffic? Perfect for regenerative braking.","Short daily commutes? Ideal for EV efficiency."],
        desc_2:"An EV works with Sri Lanka’s driving conditions, not against them.",
        desc_3:"Pure Velocity: Because Sri Lanka Deserves World-Class EV Care,We’re here to make the EV journey:",
        points_2:["Easier","Cheaper","Smarter","And a lot more exciting"],
        bg:"bg-[#0a0f2d]/45",
}
]
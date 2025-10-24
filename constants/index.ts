
export const mapImage = [
    {
        name: 'Split',
        pathMD: '/images/split-md.png',
        pathSM: '/images/split-sm.png',
    },
    {
        name: 'Ascent',
        pathMD: '/images/ascent-md.png',
        pathSM: '/images/ascent-sm.png',
    },
    {
        name: 'Bind',
        pathMD: '/images/bind-md.png',
        pathSM: '/images/bind-sm.png',
    },
]

export const gameMode = [
    {
        name: 'Standard',
        desc: 'Switch between attack and defense at the half. Plant, defuse, or eliminate the enemy team to win rounds. First to 13 wins.',
        duration: "30-40 MINS",
        imageUrl: 'https://media.valorant-api.com/gamemodes/96bd3920-4f36-d026-2b28-c683eb0bcac5/displayicon.png'
    },
    {
        name: 'Deathmatch',
        desc: 'Practice your gunplay in a quick free-for-all. No abilities, economy, or rounds. First player to 40 kills wins.',
        duration: "7-9 MINS",
        imageUrl: "https://media.valorant-api.com/gamemodes/a8790ec5-4237-f2f0-e93b-08a8e89865b2/displayicon.png"
    },
    {
        name: 'Escalation',
        desc: "Eliminate enemies to advance your team's arsenal. Cycle through a series of 12 randomized weapons.  First to complete the series wins.",
        duration: "7-9 MINS",
        imageUrl: 'https://media.valorant-api.com/gamemodes/a4ed6518-4741-6dcb-35bd-f884aecdc859/displayicon.png'
    },
    {
        name: 'Spike Rush',
        desc: "Shorter games of VALORANT with added powerup orbs and randomized weapons. Plant, defuse, or eliminate the enemy team to win rounds. First to 4 wins.",
        duration: "8-12 MINS",
        imageUrl: 'https://media.valorant-api.com/gamemodes/e921d1e6-416b-c31f-1291-74930c330b7b/displayicon.png'
    },
    {
        name: 'Swiftplay',
        desc: 'Shorter games of VALORANT with a simplified economy. Plant, defuse, or eliminate the enemy team to win rounds. First to 5 wins.',
        duration: "10-15 MIN",
        imageUrl: 'https://media.valorant-api.com/gamemodes/5d0f264b-4ebe-cc63-c147-809e1374484b/displayicon.png'
    },
]

export const currency = [
    {
        name: 'Valorant Points',
        imageUrl: '/images/vp.png',
    },
    {
        name: 'Kingdom Credits',
        imageUrl: '/images/kc.png',
    },
    {
        name: 'Radianite Points',
        imageUrl: '/images/radianite.png',
    },
]

export const navLinks = [
    {
        name: 'Gameplay',
        dropdown: [
            {
                name: 'Weapons',
                path: '/weapons'
            },
            {
                name: 'Maps',
                path: '/maps'
            }
        ]
    },
    {
        name: 'Collections',
        dropdown: [
            {
                name: 'Bundles',
                path: '/bundles'
            },
            {
                name: 'Buddies',
                path: '/buddies'
            },
            {
                name: 'Sprays',
                path: '/sprays'
            }
        ]
    },
    {
        name: 'Profile',
        dropdown: [
            {
                name: 'Player Cards',
                path: '/player-cards'
            },
            {
                name: 'Titles',
                path: '/titles'
            }
        ]
    }
]

export const roles = [
    {
        name: 'Initiator'
    },
    {
        name: 'Duelist'
    },
    {
        name: 'Sentinel'
    },
    {
        name: 'Controller'
    }
]

export const footerInfo = [
    {
        name: 'About',
        path: '/'
    },
    {
        name: 'Changelog',
        path: 'https://github.com/ahmadbisry-1626/valorant-hub/commits/main/'
    },
    {
        name: 'FAQ',
        path: '/'
    },
    {
        name: 'Contact',
        path: 'https://ahmadbisry.vercel.app'
    },
    {
        name: 'API Credits',
        path: 'https://dash.valorant-api.com/endpoints/agents'
    }

]

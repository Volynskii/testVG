interface Channel {
    name: string;
    href: string;
}

interface MenuItem {
    channels: Channel[];
}

export const mainMenuSmallDData: MenuItem[] = [
    {
        channels: [
            {
                name: 'о компании',
                href: '/about'
            },
            {
                name: 'пресс центр',
                href: '/news'
            },
            {
                name: 'социальные сети',
                href: '/social'
            }
        ]
    },

    {
        channels: [
            {
                name: 'информация',
                href: '/info'
            },
            {
                name: 'обязательный экземпляр',
                href: '/required-copies'
            },
            {
                name: 'регионы',
                href: '/regions'
            },
        ]
    },

    {
        channels: [
            {
                name: 'противодействие коррупции',
                href: '/anti-corruption'
            },
            {
                name: 'логотипы',
                href: '/logos'
            },
            {
                name: 'медиасмена',
                href: 'https://artek2024.vgtrk.com/'
            }
        ]
    },
];
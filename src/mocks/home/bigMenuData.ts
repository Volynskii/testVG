interface Channel {
    name: string;
    href: string;
}

interface MenuItem {
    title: string;
    channels: Channel[];
}

export const mainMenuBigDData: MenuItem[] = [
    {
        title: 'Телевидение',
        channels: [
            {
                name: 'Россия 1',
                href: '/russiatv'
            },
            {
                name: 'РОССИЯ К',
                href: '/tvkultura'
            },
            {
                name: 'РОССИЯ 24',
                href: '/russia24'
            },
            {
                name: 'РОССИЯ РТР',
                href: '/rtrplaneta'
            },
            {
                name: 'КАРУСЕЛЬ',
                href: '/karuseltv'
            },
        ]
    },

    {
        title: 'радио',
        channels: [
            {
                name: 'маяк',
                href: '/radiomayak'
            },
            {
                name: 'радио россии',
                href: '/radiorus'
            },
            {
                name: 'вести fm',
                href: '/radiovesti'
            },
            {
                name: 'радио культура',
                href: '/cultradio'
            },
            {
                name: 'юность',
                href: '/radiounost'
            },
        ]
    },

    {
        title: 'интернет',
        channels: [
            {
                name: 'смотрим',
                href: '/smotrim'
            },
            {
                name: 'вести',
                href: '/vesti'
            }
        ]
    },
];
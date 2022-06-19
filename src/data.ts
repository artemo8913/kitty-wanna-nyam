const dishes: Array<dish> = [
    {
        id:1,
        foodWith:'фуа-гра',
        portions: 10,
        giftMouses: 1,
        happyCustomer: false,
        weight: 0.5,
        available: true,
        choosed: false,
        choosedText: 'Печень утки разварная с артишоками.'
    },
    {
        id:2,
        foodWith:'рыбой',
        portions: 40,
        giftMouses: 2,
        happyCustomer: false,
        weight: 2,
        available: false,
        choosed: false,
        choosedText: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    },
    {
        id:3,
        foodWith:'курой',
        portions: 100,
        giftMouses: 5,
        happyCustomer: true,
        weight: 5,
        available: true,
        choosed: false,
        choosedText: 'Филе из цыплят с трюфелями в бульоне.'
    }
];

export default dishes;
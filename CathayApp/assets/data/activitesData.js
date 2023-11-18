const activitiesData = [
    {
        id: 1,
        title: 'Your profile has been posted!',
        image: require('../images/jobPost.png'),
        data: '12/03/2023 16:01:32',
        transaction: false,
    },
    {
        id: 2,
        title: 'Incoming Funds',
        image: require('../images/incomingFunds.png'),
        data: '10/03/2023 12:01:32',
        description: '+HKD 6000.00',
        transaction: true,
        incomingFunds: true,
    },
    {
        id: 3,
        title: 'Loan Repayment',
        image: require('../images/outcomingFunds.png'),
        data: '9/03/2023 11:01:32',
        description: 'HKD 2000.00',
        transaction: true,
        outcomingFunds: true,
    },
    {
        id: 4,
        title: 'Your personal identification is verified!',
        image: require('../images/personalIdentification.png'),
        data: '7/03/2023 16:11:32',
        transaction: false,
    },
    {
        id: 5,
        title: 'Your password has been changed!',
        image: require('../images/password.png'),
        data: '5/03/2023 19:01:32',
        transaction: false,
    },
];

export default activitiesData;
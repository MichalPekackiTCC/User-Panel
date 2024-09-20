import Vue from 'vue'

// chat test data
const state = Vue.observable([
    {
        chat_id: '1',
        members: [
            {
                name: 'member 1',
                in_office: 'yes',
                department: 'D1',
                role: 'Manager',
                status: 'online',
                initials: 'N1',
            },
            {
                name: 'TEST 2',
                in_office: null,
                department: 'D1',
                role: 'Manager',
                status: 'online',
                initials: 'TD',
            },
        ]
    },
    {
        chat_id: '2',
        members: [{
            name: 'member 2',
            in_office: null,
            department: 'D2',
            role: 'Agent',
            status: 'online',
            initials: 'N2',
        }]
    },
    {
        chat_id: '3',
        members: [{
            name: 'member 3',
            in_office: 'yes',
            department: 'D3',
            role: 'IT',
            status: 'offline',
            initials: 'N3',
        }]
    },
    {
        chat_id: '4',
        members: [{
            name: 'member 4',
            in_office: null,
            department: 'D1',
            role: 'Agent',
            status: 'on break',
            initials: 'N4',
        }]
    },
])

export default ()=> state
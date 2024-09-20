import Vue from 'vue'

//  user test data
const state = Vue.observable([
    {
        name: 'Michal Pekacki',
        in_office: 'yes',
        department: 'D1',
        role: 'Manager',
        status: 'online',
    },
    {
        name: 'test 1',
        in_office: null,
        department: 'D2',
        role: 'Manager',
        status: 'online',
    },
    {
        name: 'test two',
        in_office: null,
        department: 'D3',
        role: 'Agent',
        status: 'offline',
    },
    {
        name: 'test 1',
        in_office: null,
        department: 'D1',
        role: 'Agent',
        status: 'on break',
    },
    {
        name: 'test 1',
        in_office: 'yes',
        department: 'D2',
        role: 'IT',
        status: 'troubleshooting',
    },
    {
        name: 'test 1',
        in_office: 'yes',
        department: 'D2',
        role: 'Manager',
        status: 'in meeting',
    },
    {
        name: 'test 1',
        in_office: null,
        department: 'D2',
        role: 'Agent',
        status: 'online',
    },
    {
        name: 'test 1',
        in_office: null,
        department: 'D2',
        role: 'Agent',
        status: 'online',
    },
    {
        name: 'test 1',
        in_office: 'yes',
        department: 'D2',
        role: 'Agent',
        status: 'online',
    },
    {
        name: 'test 1',
        in_office: null,
        department: 'D2',
        role: 'Agent',
        status: 'offline',
    },
    {
        name: 'test 1',
        in_office: null,
        department: 'D2',
        role: 'Agent',
        status: 'offline',
    },
    {
        name: 'test 1',
        in_office: null,
        department: 'D2',
        role: 'Agent',
        status: 'online',
    },
])

export default ()=> state
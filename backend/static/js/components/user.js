export const user = {
    template: `
    <table>
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
        </thead>
        <tbody>
            <td>{{person.name}}</td>
            <td>{{person.age}}</td>
            <td>{{person.address}}</td>
        </tbody>
    </table>
    
    `,
    data(){
        return {
            person: {
                name: 'Hieu',
                age: 23,
                address: '505 Minh Khai',
            }
        };
    },
    methods: {},
}
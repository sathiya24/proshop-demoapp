import bcrypt from 'bcryptjs';
import { getMaxListeners } from 'events';

const users = [
    {
        name : 'Admin User',
        email: 'sathi125@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name : 'Vikram kumar',
        email: 'vikram12@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    },
    {
        name : 'john dae',
        email: 'john34@gmail.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false,
    }
];

export default users;
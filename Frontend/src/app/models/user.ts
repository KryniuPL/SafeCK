import { Skill } from './skill';
import { Alert } from './alert';

export class User {
    id: Number = 0;
    username: String = '';
    password: String = '';
    firstName: String = '';
    secondName: String = '';
    lastName: String = '';
    email: String = '';
    skills: Skill[] = null;
    alerts: Alert[] = null;
    accountStatus: boolean = true;
}

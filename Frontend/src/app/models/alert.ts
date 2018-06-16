import { User } from './user';
import { Category } from './category';
import { Status } from './status';
import { Importance } from './importance';


export class Alert {
    id: Number;
    title: String;
    description: String;
    createDate: Date;
    expirationTime: Number;
    importance: Importance;
    category: Category;
    status: Status;
    latitude: Number;
    longitude: Number;
    user: User;
}

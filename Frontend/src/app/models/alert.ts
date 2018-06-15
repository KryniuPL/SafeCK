import { User } from './user';
import { Category } from './category';
import { Status } from './status';

export class Alert {
    id: Number;
    text: String;
    category: Category;
    status: Status;
    latitude: Number;
    longitude: Number;
}

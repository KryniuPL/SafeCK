import { User } from './user';
import { Category } from './category';
import { Status } from './status';

export class Alert {
    id: Number;
    text: String;
    owner: User;
    category: Category;
    status: Status;
}

import { User } from './user.model';

export class Complain{
    Id: number;
    Complain: string;
    ReportedUser : User;
    SenderUser: User;
}
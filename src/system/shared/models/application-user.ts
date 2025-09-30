export interface ApplicationUser {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  isLocked: boolean;
  dateCreated: Date;
  roles: string[];
}

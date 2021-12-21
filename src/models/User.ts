export default interface User {
  id?: number;
  userName?: string; 
  email: string;
  password?: string;
  secondsWorked: number;
  secondsRested: number;
}
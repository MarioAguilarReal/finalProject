import {createContext} from 'react';
import { User } from '../models/User.model';

export const DataContext = createContext({
  isLoggedIn: false as boolean,
  user:{} as User,
  setIsLoggedIn: (val:boolean) => {},
  setUser: (val:User) => {}
 });


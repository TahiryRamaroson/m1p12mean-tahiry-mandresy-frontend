import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  setSession(key: string, value: any): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  }

  getSession(key: string): any {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  clearSession(): void {
    sessionStorage.clear();
  }

  removeSessionItem(key: string): void {
    sessionStorage.removeItem(key);
  }
}
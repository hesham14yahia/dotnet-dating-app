import { Injectable, signal } from '@angular/core';

export interface ToastMessage {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

@Injectable({
    providedIn: 'root',
})
export class ToastService {
    toast = signal<ToastMessage | null>(null);

    show(message: string, type: ToastMessage['type'] = 'success'): void {
        this.toast.set({ message, type });
    }

    clear(): void {
        this.toast.set(null);
    }
}

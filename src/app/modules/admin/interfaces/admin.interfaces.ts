import { TemplateRef } from "@angular/core";

export namespace adminInterfaces {
    export interface User {
        id: number,
        name: string,
        username: string,
        email: string,
        startDate: string 
    }
    export interface DialogConfig {
        title?: string;
        acceptButtonTitle?: string;
        declineButtonTitle?: string;
        dialogContent: TemplateRef<any>;
    }
}
import {Component } from'@angular/core';

@Component({
    selector:'chat-app',
    templateUrl:"./chat.component.html"
})
export class ChatComponent {
    public lsMessages: string[] = ["Hola Mundo","Pepe","Pica Papas","Otros"];
}
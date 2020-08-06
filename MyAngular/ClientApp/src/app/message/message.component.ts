import {Component, Input } from'@angular/core';
@Component({
    selector: 'app-messages',
    templateUrl:'./message.component.html'
})

export class MessageComponent{
    @Input() texto: string;
}

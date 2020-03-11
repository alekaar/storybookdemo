import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  buttonClicked($event: any) {
    this.onClick.emit($event);
  }


}

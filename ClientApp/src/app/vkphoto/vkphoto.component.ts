import { Component } from '@angular/core';

@Component({
  selector: 'vkphoto-component',
  templateUrl: './vkphoto.component.html'
})
export class VKPhotoComponent {
  condition: boolean = true;

  HideB() {
    this.condition = !this.condition;
  }
}

import { moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ButtonComponent } from '../app/components/button/button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
  parameters: {
    decorators: [
      moduleMetadata({
        declarations: [ButtonComponent],
        imports: [],
      })
    ],
    // Module-Level 'in-dsm' configuration (Will apply to all stories inside the module)
    'in-dsm': {
      id: 'some-id',
      versionFilePath: '../app/components/button/versionFile.json',
      componentPath: '../app/components/button/button.component.ts'
    }
  }
};

export const AButtonStorybook = () => ({
  component: ButtonComponent,
  template:
  `<div><button class="primary-btn" (click)="buttonClicked($event)">
    {{text}}
  </button></div>`,
  props: {
    text: 'A button',
    buttonClicked: action('👊 Button was clicked')
  }
});

AButtonStorybook.story = {
  name: 'A button',
  parameters: { notes: 'My notes on a button' },
};


export const ADisabledButtonStorybook = () => ({
  component: ButtonComponent,
  template:
  `<div><button class="primary-btn" (click)="buttonClicked($event)" disabled>
    {{text}}
  </button></div>`,
  props: {
    text: 'A disabled button',
  }
});

ADisabledButtonStorybook.story = {
  name: 'A disabled button',
  parameters: { notes: 'My notes on a disabled button' },
};

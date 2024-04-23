import { bootstrapApplication } from '@angular/platform-browser';
import { appParam } from './src/config/param';
import { AppComponent } from './src/config/component';

bootstrapApplication(AppComponent, appParam)
    .catch((err) => console.error(err));

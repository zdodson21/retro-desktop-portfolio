import { bootstrapApplication } from '@angular/platform-browser';
import { inject as vercelAnalytics } from '@vercel/analytics';
import { injectSpeedInsights as vercelSpeedInsights } from '@vercel/speed-insights';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

vercelAnalytics();
vercelSpeedInsights();

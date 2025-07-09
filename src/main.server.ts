import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';



const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    ...config,
    providers: [
      ...(config.providers || []),
      importProvidersFrom(BrowserModule, BrowserAnimationsModule), // Import animations module
    ],
  });

export default bootstrap;

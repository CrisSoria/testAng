import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ButtonComponent } from './components/button/button.component';
import { ContactBannerComponent } from './components/contact-banner/contact-banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { PTextComponent } from './components/p-text/p-text.component';
import { FooterColComponent } from './components/footer/footer-col/footer-col.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroSectionComponent } from './pages/home/hero-section/hero-section.component';
import { AboutSectionComponent } from './pages/home/about-section/about-section.component';
import { ServicesSectionComponent } from './pages/home/services-section/services-section.component';
import { ProjectsSectionComponent } from './pages/home/projects-section/projects-section.component';
import { ServiceItemComponent } from './pages/home/services-section/service-item/service-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    ButtonComponent,
    ContactBannerComponent,
    FooterComponent,
    NavMenuComponent,
    SectionTitleComponent,
    PTextComponent,
    FooterColComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    ServicesSectionComponent,
    ProjectsSectionComponent,
    ServiceItemComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

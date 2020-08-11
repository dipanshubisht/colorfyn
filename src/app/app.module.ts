import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutLoginComponent } from './layout-login/layout-login.component';
import { LayoutHomeComponent } from './layout-home/layout-home.component';
import { LayoutMainComponent } from './layout-main/layout-main.component';
import { LayoutConversationsHomeComponent } from './layout-conversations-home/layout-conversations-home.component';
import { LayoutIndividualConversationComponent } from './layout-individual-conversation/layout-individual-conversation.component';
import { FormLoginComponent } from './form-login/form-login.component';
import { HomeFeedComponent } from './home-feed/home-feed.component';
import { ProductListingComponent } from './product-listing/product-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutLoginComponent,
    LayoutHomeComponent,
    LayoutMainComponent,
    LayoutConversationsHomeComponent,
    LayoutIndividualConversationComponent,
    FormLoginComponent,
    HomeFeedComponent,
    ProductListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

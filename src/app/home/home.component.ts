import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="My App" class="action-bar"></ActionBar>
    <Image src="https://user-images.githubusercontent.com/544280/42960643-66d498ac-8b5a-11e8-8946-7224eefea6a5.jpg"></Image>
  `
})
export class HomeComponent implements OnInit {

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}

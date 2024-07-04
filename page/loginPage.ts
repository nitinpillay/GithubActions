import { test, expect } from "@playwright/test";
import { Page } from "@playwright/test";

class loginPage {
  constructor(private page: Page) {}
  async getUsername() {
    await this.page.locator('[placeholder="Username"]').fill("Admin");
  }

  async getPassword() {
    await this.page.locator('[placeholder="Password"]').fill("admin123");
  }

  async clickonlogin() {
    await this.page.locator('[type="submit"]').click();
  }
}

export default loginPage;

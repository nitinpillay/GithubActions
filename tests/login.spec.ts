import { test, expect, Page } from "@playwright/test";
import loginPage from "../page/loginPage";

let page: Page;

test("has title", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  const loginpage = new loginPage(page);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/OrangeHRM/);
  loginpage.getUsername();
  loginpage.getPassword();
  loginpage.clickonlogin();

  //   await page.locator('[placeholder="Password"]').fill('admin123')
  //   await page.locator('[type="submit"]').click()
  await page.waitForTimeout(5000);
  await expect(page.locator(".oxd-topbar-header-breadcrumb h6")).toHaveText(
    "Dashboard"
  );
});

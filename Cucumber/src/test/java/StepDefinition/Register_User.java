/*
 * package StepDefinition;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; import
 * org.openqa.selenium.chrome.ChromeDriver;
 * 
 * import cucumber.api.java.en.And; import cucumber.api.java.en.Given; import
 * cucumber.api.java.en.When; import cucumber.api.java.en.Then; import
 * junit.framework.Assert;
 * 
 * public class Register_User {
 * 
 * WebDriver driver;
 * 
 * @Given("^User has launched Googlechrome$") public void
 * user_has_launched_Googlechrome() {
 * System.setProperty("webdriver.chrome.driver",
 * "C:\\Users\\rohit.a.shetty\\Downloads\\chromedriver_RV\\chromedriver.exe");
 * driver = new ChromeDriver(); driver.manage().window().maximize();
 * driver.get("http://demowebshop.tricentis.com"); }
 * 
 * @When("^User reaches Webshop page$") public void user_reaches_Webshop_page(){
 * 
 * String Title =driver.getTitle(); System.out.println("Hello");
 * Assert.assertEquals("Demo Web Shop", Title); }
 * 
 * @Then("^User clicks on register$") public void user_clicks_on_register() {
 * driver.findElement(By.xpath("//a[@href=\"/register\"]")).click(); }
 * 
 * @Then("^Webshop Register page is opened$") public void
 * webshop_Register_page_is_opened() { String Actual_Title=driver.getTitle();
 * 
 * Assert.assertEquals("Demo Web Shop. Register", Actual_Title); }
 * 
 * //____________________ 2nd Scenario__________________________________
 * 
 * 
 * 
 * 
 * @Given("^User is on Registration page$") public void
 * user_is_on_Registration_page() { String Actual_Title=driver.getTitle();
 * 
 * Assert.assertEquals("Demo Web Shop. Register", Actual_Title); }
 * 
 * @When("^User enters (.+) and (.+)$") public void user_enters_and(String
 * firstname, String lastname) {
 * driver.findElement(By.id("gender-male")).click();
 * driver.findElement(By.id("FirstName")).sendKeys(firstname);
 * driver.findElement(By.id("LastName")).sendKeys(lastname); }
 * 
 * @And("^Enters (.+) (.+) and (.+)$") public void enters_and(String mailid,
 * String password, String confirmpassword) {
 * 
 * driver.findElement(By.id("Email")).sendKeys(mailid);
 * driver.findElement(By.id("Password")).sendKeys(password);
 * driver.findElement(By.id("ConfirmPassword")).sendKeys(confirmpassword);
 * driver.findElement(By.id("register-button")).click(); }
 * 
 * @Then("^User clicks on Register and User gets registered$") public void
 * user_clicks_on_Register_and_User_gets_registered() { driver.findElement(By.
 * xpath("//div[contains(text(),\"Your registration completed\")]")); }
 * 
 * 
 * 
 * }
 */
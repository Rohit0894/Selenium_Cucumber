/*
 * package StepDefinition;
 * 
 * import java.io.InterruptedIOException; import java.util.List;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; import
 * org.openqa.selenium.chrome.ChromeDriver;
 * 
 * import cucumber.api.DataTable; import cucumber.api.java.en.And; import
 * cucumber.api.java.en.Given; import cucumber.api.java.en.Then; import
 * cucumber.api.java.en.When; import junit.framework.Assert;
 * 
 * public class Datatable_Register {
 * 
 * WebDriver driver;
 * 
 * @Given("^User is on  Webshop page$") public void user_is_on_webshop_page(){
 * System.setProperty("webdriver.chrome.driver",
 * "C:\\Users\\rohit.a.shetty\\Downloads\\chromedriver_RV\\chromedriver.exe");
 * 
 * driver = new ChromeDriver(); driver.manage().window().maximize();
 * driver.get("http://demowebshop.tricentis.com"); }
 * 
 * 
 * 
 * @When("^Title of the page is Demo Web Shop Register$") public void
 * title_of_the_page_is_demo_web_shop_register() {
 * 
 * driver.findElement(By.xpath("//a[@href=\"/register\"]")).click(); String
 * tittle = driver.getTitle(); Assert.assertEquals("Demo Web Shop. Register",
 * tittle); System.out.println(tittle);
 * 
 * }
 * 
 * @Then("^User clicks on male Radio button$") public void
 * user_clicks_on_male_Radio_button() {
 * driver.findElement(By.id("gender-male")).click();
 * 
 * 
 * }
 * 
 * @And("^Enters Firstname, Lastname, Email, password and Confirm Password$")
 * public void
 * enters_firstname_lastname_email_password_and_confirm_password(DataTable
 * credentials) throws InterruptedIOException {
 * 
 * 
 * List<List<String>> data=credentials.raw();
 * driver.findElement(By.id("FirstName")).sendKeys(data.get(0).get(0));
 * driver.findElement(By.id("LastName")).sendKeys(data.get(0).get(1));
 * driver.findElement(By.id("Email")).sendKeys(data.get(0).get(2));
 * driver.findElement(By.id("Password")).sendKeys(data.get(0).get(3));
 * driver.findElement(By.id("ConfirmPassword")).sendKeys(data.get(0).get(4));
 * 
 * }
 * 
 * @And("^User clicks on Register button$") public void
 * user_clicks_on_register_button() {
 * driver.findElement(By.id("register-button")).click(); }
 * 
 * @And("^User is registered$") public void user_is_registered() {
 * 
 * driver.findElement(By.
 * xpath("//div[contains(text(),'Your registration completed')]"));
 * 
 * 
 * }
 * 
 * }
 * 
 * 
 * 
 * 
 */
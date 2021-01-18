/*
 * 
 * package SD;
 * 
 * import org.openqa.selenium.By; import org.openqa.selenium.WebDriver; import
 * org.openqa.selenium.chrome.ChromeDriver;
 * 
 * import cucumber.api.java.en.Given; import cucumber.api.java.en.Then; import
 * cucumber.api.java.en.When; import junit.framework.Assert;
 * 
 * public class StepD {
 * 
 * WebDriver driver;
 * 
 * 
 * @Given("^User is already on Login Page$") public void
 * user_is_already_on_Login_Page(){
 * 
 * System.setProperty("webdriver.chrome.driver",
 * "C:\\Users\\rohit.a.shetty\\Downloads\\chromedriver_RV\\chromedriver.exe");
 * 
 * driver = new ChromeDriver(); driver.get("http://demowebshop.tricentis.com");
 * String Title = driver.getTitle(); driver.manage().window().maximize();
 * 
 * }
 * 
 * @When("^Title of Login page is WebShop Login$") public void
 * title_of_Login_page_is_WebShop_Login(){ String
 * Actual_Title=driver.getTitle();
 * Assert.assertEquals("Demo Web Shop",Actual_Title);
 * 
 * 
 * driver.findElement(By.xpath("//a[@href='/login']")).click(); String title2
 * =driver.getTitle(); Assert.assertEquals("Demo Web Shop. Login", title2);
 * System.out.println("Url opened successfully"); }
 * 
 * @Then("^User Enters (.+) and (.+)$") public void user_Enters_u(String
 * Username, String Password) {
 * driver.findElement(By.id("Email")).sendKeys(Username);
 * driver.findElement(By.id("Password")).sendKeys(Password);
 * 
 * }
 * 
 * @Then("^clicks on Login button$") public void clicks_on_Login_button() {
 * driver.findElement(By.id("RememberMe")).click();
 * driver.findElement(By.xpath("//input[@class='button-1 login-button']")).click
 * (); }
 * 
 * @Then("^Demo Web Shop Title is displayed$") public void
 * demo_Web_Shop_Title_is_displayed(){
 * 
 * String Title2=driver.getTitle(); Assert.assertEquals("Demo Web Shop",
 * Title2); System.out.println("Successful Login"); }
 * 
 * @Then("^Browser is Closed$") public void browser_is_Closed() { driver.quit();
 * } }
 */
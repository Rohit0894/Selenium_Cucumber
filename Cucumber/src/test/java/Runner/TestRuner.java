package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="\\Users\\rohit.a.shetty\\Accenture Eclipse Training\\Cucumber\\src\\test\\java\\Feature\\E2E.feature",
		glue= {"StepDefinition"},
		format= {"pretty","html:test-output"},
		monochrome= true,
		strict = true,
		dryRun = false,
		tags= {"@SmokeTest,@RegressionTest"}
		
		
		)

public class TestRuner {
	
	

}


// for OR Operator
//tags= {"@SmokeTest,@RegressionTest"}

//For AND Operator
//tags= {"@SmokeTest","@RegressionTest"}

//To Ignore a Test Case 
//tags= {"~@SmokeTest"}

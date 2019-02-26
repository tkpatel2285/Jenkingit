$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/FeatureFiles/buyingproduct.feature");
formatter.feature({
  "line": 3,
  "name": "user should be able to buy product",
  "description": "",
  "id": "user-should-be-able-to-buy-product",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@buyingProduct"
    },
    {
      "line": 2,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 5828696218,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user able to buy product",
  "description": "",
  "id": "user-should-be-able-to-buy-product;user-able-to-buy-product",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user enter register email id and password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on add to cart button in Apple MacBook Pro  inch product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click on shopping cart button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User select Terms and conditions",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click on checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter billing and shipping addresses",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user select shipping method and payment method",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter valid payment details",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user click on Confirm Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user should see payment confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsInLoginPage()"
});
formatter.result({
  "duration": 86724659,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterRegisterEmailIdAndPassword()"
});
formatter.result({
  "duration": 3451523151,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnAddToCartButtonInAppleMacBookProInchProduct()"
});
formatter.result({
  "duration": 1652557387,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnShoppingCartButton()"
});
formatter.result({
  "duration": 1852198330,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.useSelectTermsAndConditions()"
});
formatter.result({
  "duration": 59268893,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnCheckoutButton()"
});
formatter.result({
  "duration": 2463783542,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterBillingAndShippingAddresses()"
});
formatter.result({
  "duration": 714879297,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectShippingMethodAndPaymentMethod()"
});
formatter.result({
  "duration": 713752431,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterValidPaymentDetails()"
});
formatter.result({
  "duration": 938379443,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnConfirmButton()"
});
formatter.result({
  "duration": 605991080,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeePaymentConfirmationMessage()"
});
formatter.result({
  "duration": 1473821848,
  "status": "passed"
});
formatter.after({
  "duration": 173199,
  "error_message": "cucumber.runtime.CucumberException: When a hook declares an argument it must be of type cucumber.api.Scenario. public void Gerkin.Hooks.after(org.testng.ITestResult)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:52)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.uri("src/test/Resources/FeatureFiles/currencyChangeToEuro.feature");
formatter.feature({
  "line": 4,
  "name": "User  to wants change the currency dollar to euro",
  "description": "",
  "id": "user--to-wants-change-the-currency-dollar-to-euro",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@currencyToEuro"
    },
    {
      "line": 2,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 7322125540,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "user should be able to change the currency",
  "description": "",
  "id": "user--to-wants-change-the-currency-dollar-to-euro;user-should-be-able-to-change-the-currency",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User select the currency dollar to euro",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click on jewelry Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User is able to see the price in euro",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 56451,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userSelectTheCurrencyDollarToEuro()"
});
formatter.result({
  "duration": 1439762259,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnJewelryButton()"
});
formatter.result({
  "duration": 690903345,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userIsAbleToSeeThePriceInEuro()"
});
formatter.result({
  "duration": 30390323,
  "status": "passed"
});
formatter.after({
  "duration": 41055,
  "error_message": "cucumber.runtime.CucumberException: When a hook declares an argument it must be of type cucumber.api.Scenario. public void Gerkin.Hooks.after(org.testng.ITestResult)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:52)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.uri("src/test/Resources/FeatureFiles/hightolowprice.feature");
formatter.feature({
  "line": 3,
  "name": "user wants to see price high to low in electronics page",
  "description": "",
  "id": "user-wants-to-see-price-high-to-low-in-electronics-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@priceHighToLow"
    },
    {
      "line": 2,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 5108812950,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: unhandled inspector error: {\"code\":-32000,\"message\":\"No target with given id\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MISHU\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\tkpatel\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61235}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: 518b6e0204b4bf352002a9c2cbdb6fdf\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.fullscreen(RemoteWebDriver.java:841)\r\n\tat Gerkin.BasePage.chrome_Driver(BasePage.java:18)\r\n\tat Gerkin.Hooks.setUp(Hooks.java:19)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 5,
  "name": "user should be able to see price high to low",
  "description": "",
  "id": "user-wants-to-see-price-high-to-low-in-electronics-page;user-should-be-able-to-see-price-high-to-low",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click on electronics page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on Camera \u0026 photo page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User click on sort by High to low",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User should be able to see price high to low order",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClickOnElectronicsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClickOnCameraPhotoPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClickOnSortByHighToLow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userShouldBeAbleToSeePriceHighToLowOrder()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 53885,
  "error_message": "cucumber.runtime.CucumberException: When a hook declares an argument it must be of type cucumber.api.Scenario. public void Gerkin.Hooks.after(org.testng.ITestResult)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:52)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.uri("src/test/Resources/FeatureFiles/productEmailToFriend.feature");
formatter.feature({
  "line": 4,
  "name": "User wants to send product details to friend",
  "description": "",
  "id": "user-wants-to-send-product-details-to-friend",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 8208175619,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "user should be able to send product details to friend with register email",
  "description": "",
  "id": "user-wants-to-send-product-details-to-friend;user-should-be-able-to-send-product-details-to-friend-with-register-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@emailToFriend"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User is on loginPage in nopcommerce",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User enter valid login credential",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User Click on product Apple MacBook Pro",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click on Email a friend Button and enter friend\u0027s email address",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Click on send email Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user should see send successfully message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnLoginPageInNopcommerce()"
});
formatter.result({
  "duration": 592392134,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterValidLoginCredential()"
});
formatter.result({
  "duration": 52052244,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Log in\"}\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MISHU\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.45.615291 (ec3682e3c9061c..., userDataDir: C:\\Users\\tkpatel\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61247}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 71.0.3578.98, webStorageEnabled: true}\nSession ID: fc2e21daea0fce3533524f950b803957\n*** Element info: {Using\u003dlink text, value\u003dLog in}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Gerkin.Utils.click_Element(Utils.java:24)\r\n\tat Gerkin.HomePage.clickOnLogIn(HomePage.java:20)\r\n\tat Gerkin.LogInButton.userDetail(LogInButton.java:16)\r\n\tat Gerkin.MyStepdefs.userEnterValidLoginCredential(MyStepdefs.java:146)\r\n\tat ✽.When User enter valid login credential(src/test/Resources/FeatureFiles/productEmailToFriend.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnProductAppleMacBookPro()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClickOnEmailAFriendButtonAndEnterFriendsEmailAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.clickOnSendEmailButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userShouldSeeSendSuccessfullyMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 57733,
  "error_message": "cucumber.runtime.CucumberException: When a hook declares an argument it must be of type cucumber.api.Scenario. public void Gerkin.Hooks.after(org.testng.ITestResult)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:52)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 6131821551,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user should not be able to send product details to friend with unregister email",
  "description": "",
  "id": "user-wants-to-send-product-details-to-friend;user-should-not-be-able-to-send-product-details-to-friend-with-unregister-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@email"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "User is on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "User Click on product Apple MacBook Pro",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "User click on Email  friend Button and enter friend\u0027s email address",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enter user\u0027s email address and Click on send email Button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user should not send product details to friend",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnHomepage()"
});
formatter.result({
  "duration": 121026,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnProductAppleMacBookPro()"
});
formatter.result({
  "duration": 2188927800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClickOnEmailFriendButtonAndEnterFriendSEmailAddress()"
});
formatter.result({
  "duration": 713630122,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userEnterUserSEmailAddressAndClickOnSendEmailButton()"
});
formatter.result({
  "duration": 579859328,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userShouldNotSendProductDetailsToFriend()"
});
formatter.result({
  "duration": 34263151,
  "status": "passed"
});
formatter.after({
  "duration": 44903,
  "error_message": "cucumber.runtime.CucumberException: When a hook declares an argument it must be of type cucumber.api.Scenario. public void Gerkin.Hooks.after(org.testng.ITestResult)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:52)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.uri("src/test/Resources/FeatureFiles/registration.feature");
formatter.feature({
  "line": 4,
  "name": "user should be able to register successfully",
  "description": "",
  "id": "user-should-be-able-to-register-successfully",
  "keyword": "Feature",
  "tags": [
    {
      "line": 3,
      "name": "@registration"
    },
    {
      "line": 3,
      "name": "@all"
    }
  ]
});
formatter.before({
  "duration": 5381140405,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d71.0.3578.98)\n  (Driver info: chromedriver\u003d2.45.615291 (ec3682e3c9061c10f26ea9e5cdcf3c53f3f74387),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4.86 seconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MISHU\u0027, ip: \u0027192.168.1.11\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: driver.version: ChromeDriver\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$errorHandler$0(JsonWireProtocolResponse.java:54)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:498)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:485)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:471)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat Gerkin.BasePage.chrome_Driver(BasePage.java:16)\r\n\tat Gerkin.Hooks.setUp(Hooks.java:19)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 5,
  "name": "User should be able to register",
  "description": "",
  "id": "user-should-be-able-to-register-successfully;user-should-be-able-to-register",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "user is on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click register Button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user needs to select gender",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user provide first name,last name and date of birth",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user provide Email address,company Name,",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user select newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter password and reenter password",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user needs to click on Register Page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user will see welcome message",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnTheHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userClickRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userNeedsToSelectGender()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userProvideFirstNameLastNameAndDateOfBirth()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userProvideEmailAddressCompanyName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userSelectNewsletter()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userEnterPasswordAndReenterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userNeedsToClickOnRegisterPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MyStepdefs.userWillSeeWelcomeMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 57733,
  "error_message": "cucumber.runtime.CucumberException: When a hook declares an argument it must be of type cucumber.api.Scenario. public void Gerkin.Hooks.after(org.testng.ITestResult)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:52)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.execution.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:47)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:242)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:70)\r\n",
  "status": "failed"
});
});
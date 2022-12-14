import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import utilities from '../../helpers/Utilities';


setDefaultTimeout (120*1000);

When('I enter {string} {string} {string} as Date of Birth', async (day, month, year) => {
    await element(by.id('formLabel-dateOfBirth')).tap();
    await utilities.selectDatePickerDate(day, month, year);
    await utilities.confirmPickerButton();
});

Then('I select {string} as Start Day', async (day) => {
    await element(by.id('formLabel-startDay')).tap();
    await utilities.selectPickerValue(element(by.id('formPicker-startDay')), day);
});

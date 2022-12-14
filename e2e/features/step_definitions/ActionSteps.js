import { Then, setDefaultTimeout} from '@cucumber/cucumber';
import Utilities from '../../helpers/Utilities';

setDefaultTimeout(120*1000);

Then ('I type {string} as name and {string} as Surname', async (name, surname) => {
    await element(by.id('formInput-name')).typeText(name);
    await element(by.id('formInput-surname')).typeText(surname);
});

Then ('I replace {string} in name and {string} in Surname', async (name, surname) => {
    await element(by.id('formInput-name')).replaceText(surname);
    await element(by.id('formInput-surname')).replaceText(name);
    await element(by.id('formInput-surname')).tapBackspaceKey();
    await element(by.id('formInput-surname')).tapReturnKey;
});

Then ('I enter {string} in name and {string} in surname', async (name, surname) => {
    await Utilities.typeInElement(element(by.id('formInput-name')), name);
    await Utilities.typeInElement(element(by.id('formInput-surname')), surname);
});


// Swiping actions
Then('I swipe {string} {string}', async (elementId, direction) => {
    await element(by.id(elementId)).swipe(direction);
});

Then('I swipe {string} {string} {string}', async (elementId, direction, speed) => {
    await element(by.id(elementId)).swipe(direction, speed);
});

Then('I swipe {string} {string} {string} for {float} of the screen', async (elementId, direction, speed, float) => {
    await element(by.id(elementId)).swipe(direction, speed, float);
});

// Scrolling

Then('I scroll {string} {int} pixels {string}', async (elementId, pixels, direction) => {
    await element(by.id(elementId)).scroll(pixels, direction);
});

Then('I scroll {string} {int} pixels {string} with X: {float} and Y: {float}', async (elementId, pixels, direction, x, y) => {
    await element(by.id(elementId)).scroll(pixels, direction, x, y);
});

Then('I scroll {string} to the {string}', async (elementId, edge) => {
await element(by.id(elementId)).scrollTo(edge);
});

//Scrolling to element
Then('I scroll {string} to {string} at {int} pixels {string}', async (backgroundID, targetElementID, pixels, direction) => {
    await Utilities.scrollToElement(
        element(by.id(targetElementID)),
        by.id(backgroundID),
        pixels,
        direction
    )

   // await waitFor(element(by.id(targetElementID))).toBeVisible().whileElement(by.id(backgroundID)).scroll(pixels,direction);
});


// Calendar


Then('I select {string} {string} of {string} {string} date in the calendar', async (weekday, day, month, year) => {
    await Utilities.scrollToElement(element(by.id('formInput-startDate')), 
        by.id('formBackground'),
        300,
        'down');
    await element(by.id('formLabel-startDate')).tap();
    await element(by.id('formLabel-startDate')).tap();
    await element(by.id('formBackground')).swipe('up');
    await Utilities.selectCalendarDate(weekday, day, month, year);
});


import { ToastAndroid } from 'react-native';
import baseData from '../testData/baseData';

class Utilities {

    async sleep(milliseconds) {
        return new Promise(resolve => setTimeoutresolve, milliseconds);
    }

    async typeInElement(mobileElement, text){
        await mobileElement.replaceText(text);
        await mobileElement.tapReturnKey();
    }

    async scrollToElement(targetElement, background, pixel, direction){
        if (direction == 'left' || direction == 'right') {
            await this.scrollHorizontallyToElement(element(background), direction, targetElement)
        } else {
            await waitFor(targetElement)
            .toBeVisible()
            .whileElement(background)
            .scroll(pixel, direction);
        }
      
    }

    async scrollHorizontallyToElement (background, direction, targetElement){
        while(await this.softElementsAssertion(targetElement) == false) {
            const scrollDirection = direction == 'left' ? 'right' : 'left';
            await background.swipe(scrollDirection, 'slow',0.5);
        }
    }

    async softElementsAssertion(mobileElement) {
        try {
            await expect(mobileElement).toBeVisible();
            return true;
        } catch {
            return false;
        }
    }

    async softTextAssertion(mobileElement, text) {
        try {
            await expect(mobileElement).toHaveText(text);
            return true;
        } catch {
            return false;
        }
    }

    async selectCalendarDate(weekday, day, month, year) {
        while (await this.softTextAssertion(element(by.id('HEADER_MONTH_NAME')),
            `${month} ${year}`) === false) {
            await element(by.id('native.calendar.CHANGE_MONTH_RIGHT_ARROW')).tap();
        }
        await element(by.label(` ${weekday} ${day} ${month} ${year} `)).atIndex(0).tap();

    }
    
    async selectDatePickerDate(day, month, year) {
        if (device.getPlatform() === 'ios') {
            await element(by.id('formDatePicker')).setDatePickerDate(`${day}-${month}-${year}`,
                'dd-MM-yyyy');
        } else {
           await element(by.type('android.widget.EditText')).atIndex(2).typeText(year);
           await element(by.type('android.widget.EditText')).atIndex(1).typeText(day);
           await element(by.type('android.widget.EditText')).atIndex(0).tap();
           await element(by.type('android.widget.EditText')).atIndex(0).clearText();
           await element(by.type('android.widget.EditText')).atIndex(0).typeText(baseData.getMonth(month));
        }
    }


    async confirmPickerButton() {
        if (device.getPlatform() === 'ios') {
            await element(by.id('confirmDateButton')).tap();
        } else {
            await element(by.text('OK')).tap();
        }
    }

    async cancelPickerButton() {
        if (device.getPlatform() === 'ios') {
            await element(by.id('cancelDateButton')).tap();
        } else {
            await element(by.text('CANCEL')).tap();
        }
    }


    async selectPickerValue (picker, value) {
        if (device.getPlatform() == 'ios'){
            await picker.setColumnToValue(0, value);
        } else {
            await element(by.type('android.widget.Spinner')).tap();
            await element(by.type('android.widget.CheckedTextView').and(by.text(value))).tap();
        }
    }


}

export default new Utilities();
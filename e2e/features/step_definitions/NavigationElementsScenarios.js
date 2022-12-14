import { Then, setDefaultTimeout, Given } from '@cucumber/cucumber'

setDefaultTimeout (120*1000);

Then ('I tap on Add member Icon', async () => {
    await element(by.id('memberListHeader')).atIndex(0).tap();
    await element(by.id('addMemberIcon')).atIndex(0).tap();
})


Given('I tap on the cities navigationtab', async () => {
    await element(by.id('citiesNavigationSection')).atIndex(0).tap();
    await element(by.id('citiesNavigationImage')).atIndex(0).tap();
});


Given('I tap on the {string} navigationtab', async (section) => {
    await element(by.id(`${section.toLowerCase()}NavigationSection`)).atIndex(0).tap();
    await element(by.id(`${section.toLowerCase()}NavigationImage`)).atIndex(0).tap();
});


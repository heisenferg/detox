import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

Given('I tap on the Counters section by text', async () => {
  await element(by.text('Counters')).tap();
});
When('I tap on Water Counter', async () => {
  await element(by.text('WATER COUNTER')).tap();
});
Then('I tap on electricity Counter', async () => {
  await element(by.text('ELECTRICITY COUNTER')).tap();
});
Then('I tap on gas Counter', async () => {
  await element(by.text('GAS COUNTER')).tap();
});
Then('I tap on broadband Counter', async () => {
  await element(by.text('BROADBAND COUNTER')).tap();
});

// BY ID
Given('I tap on the Counters sections by ID', async () => {
  await element(by.id('countersID')).tap();
});
When('I tap on the water counter by ID', async () => {
  await element(by.id('waterID')).longPress(5000);
});
Then('I tap on the electricity counter by ID', async () => {
  await element(by.id('electricityID')).multiTap(3);
});
Then('I tap on the gas counter by ID', async () => {
  await element(by.id('gasID')).multiTap(6);
});
Then('I tap on the broadband counter by ID', async () => {
  await element(by.id('broadbandID')).tap({ x:5, y:250 });
});

// By Multiple tags
When('I tap on water counter title by type and text', async () => {
  const platformType = device.getPlatform() == 'ios' ? 'RCTTextView' : 'android.widget.TextView'
  await element(by.type(platformType).and(by.text('WATER COUNTER'))).tap();
});

// BY traits
Then('I tap on the electricity counter by traits and text', async () =>{
  await element(by.traits(['staticText']).and(by.text('ELECTRICITY COUNTER'))).tap();
});

// BY ANCESTORS
Then('I tap on the gas counter by ancestor ID and descendant text', async () => {
  await element(by.id('counterButton').withDescendant(by.text('GAS COUNTER'))).tap();
});
Then('I tap on the broadband counter by descendant text and ancestor type', async () => {
  const platformType = device.getPlatform() == 'ios' ? 'RCTView' : 'android.View.ViewGroup'
  await element(by.text('BROADBAND COUNTER').withAncestor(by.type(platformType))).tap();
});
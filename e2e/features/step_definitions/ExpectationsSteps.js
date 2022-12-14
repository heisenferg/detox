import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(120*1000);

When ('I verify that the first image of the row is visible', async () => {
    await expect(element(by.id('image-europe-0'))).toBeVisible();
});

Then ('I verify that the last image of the row is not visible', async () => {
    await expect(element(by.id('image-europe-2'))).not.toBeVisible();
})

When ('I verify that the first image exists', async () => {
    await expect(element(by.id('image-europe-0'))).toExist;
});

Then ('I verify that the Water counter do not exists', async () => {
 await expect(element(by.text('WATER COUNTER'))).not.toExist();
});

// Expect content by have text, label or ID
When('I expect the Member list header text to be {string}', async (text) =>{
    await expect(element(by.id('memberListHeader'))).toHaveText(text);
});

Then ('I expect the add member button to have {string} as label', async (label) => {
    await expect(element(by.label('addMemberLabel'))).toHaveLabel(label);
});

Then ('I expect the add member button to have {string} as ID', async (id) => {
    await expect(element(by.id('addMemberIcon'))).toHaveId(id);
})
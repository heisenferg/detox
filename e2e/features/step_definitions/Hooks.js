import { BeforeAll, Before, AfterAll, After } from '@cucumber/cucumber';
import { init, cleanup } from 'detox';
import { detox as config } from '../../../package.json';

BeforeAll({ timeout: 120 * 1000 }, async () => {
  await init(config);
});

Before(async () => {
  // eslint-disable-next-line no-undef
  await device.launchApp({ newInstance: true });
});

AfterAll(async () => {
  await cleanup();
});

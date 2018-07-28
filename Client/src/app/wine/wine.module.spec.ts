import { WineModule } from './wine.module';

describe('WineModule', () => {
  let wineModule: WineModule;

  beforeEach(() => {
    wineModule = new WineModule();
  });

  it('should create an instance', () => {
    expect(wineModule).toBeTruthy();
  });
});

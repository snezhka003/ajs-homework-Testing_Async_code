import read from '../reader';
import GameSavingLoader from '../GameSavingLoader';

jest.mock('../reader');

beforeEach(() => {
  jest.resetAllMocks();
});

test('проверка поимки ошибки', async () => {
  expect.assertions(1);
  read.mockReturnValue(new Error());
  await expect(GameSavingLoader.load()).rejects.toBeInstanceOf(Error);
});

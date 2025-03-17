import { initializeTimes } from '../components/Main';  // Adaptez le chemin si nécessaire

test('initializeTimes should return correct time slots', () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

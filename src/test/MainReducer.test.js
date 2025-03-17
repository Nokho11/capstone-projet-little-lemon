import { availableTimesReducer, initializeTimes } from '../components/Main';  // Adaptez le chemin si nécessaire

test('updateTimes should update available times correctly', () => {
  const initialState = initializeTimes();
  const newTimes = ["18:00", "19:00", "20:00"];

  // Simulez une action de mise à jour des horaires
  const action = { type: 'UPDATE_TIMES', newTimes };
  const updatedState = availableTimesReducer(initialState, action);

  expect(updatedState).toEqual(newTimes);
});

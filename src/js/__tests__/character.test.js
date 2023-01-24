import Team from '../class/Team';


test('Правильно создаётся объект', () => {
  const bowerman = {
    name: 'Лучник', type: 'Bowman', health: 100, level: 1, attack: 40, defence: 10,
  };
  const daemon = {
    name: 'Демон', type: 'Daemon', health: 100, level: 1, attack: 50, defence: 10,
  };
  const zombie = {
    name: 'Зомби', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 15,
  };

  const team = new Team([bowerman, daemon, zombie]);

  const result = [];

  for (const item of team) {
    result.push(item.next().value);
    result.push(item.next().value);
  }

  const correct = [
    {
      attack: 40, defence: 10, health: 100, level: 1, name: 'Лучник', type: 'Bowman',
    },
    {
      attack: 50, defence: 10, health: 100, level: 1, name: 'Демон', type: 'Daemon',
    },
  ];

  expect(result).toEqual(correct);
});

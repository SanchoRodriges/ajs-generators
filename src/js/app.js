import Team from './class/Team';

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

for (const item of team) {
  console.log(item.next().value);
  console.log(item.next().value);
}

import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

class PVE extends Battle {
  private _enemies: Array<Monster | Fighter | SimpleFighter>;

  constructor(
    player: Character | Fighter,
    enemies: Array<Monster | Fighter | SimpleFighter>,
  ) {
    super(player);
    this._enemies = enemies;
  }

  get enemies(): Array<Monster | Fighter | SimpleFighter> {
    return this._enemies;
  }

  set enemies(value: Array<Monster | Fighter | SimpleFighter>) {
    this._enemies = value;
  }

  fight(): number {
    this.attackEnemies();
    this.attackPlayerByEnemies();
    return this.isPlayerDefeated() ? -1 : 1;
  }

  private attackEnemies(): void {
    this.enemies.forEach((enemy) => this.player.attack(enemy));
  }

  private attackPlayerByEnemies(): void {
    this.enemies.forEach((enemy) => enemy.attack(this.player));
  }

  private isPlayerDefeated(): boolean {
    return this.player.lifePoints === -1;
  }
}

export default PVE;
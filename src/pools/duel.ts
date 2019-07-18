import Discord from 'discord.js';

let activeDuels: ActiveDuel[] = [];

export class ActiveDuel {
  public readonly startDate: Date;
  public challenged: Discord.User;
  public participants: Discord.User[];

  /**
   * Challenges an user to a duel
   * @param challenger - The user who is challenging the other
   * @param challenged - The user who will be challenged
   */
  constructor(challenger: Discord.User, challenged: Discord.User) {
    this.participants = [challenger];
    this.challenged = challenged;
    this.startDate = new Date();
    activeDuels.push(this);
  }
}

export default activeDuels;
class Player {
  /**
   * Initializes a Player object
   * @constructor
   * @param {string} name - Player's name
   * @param {integer} id - Player's id number
   * @param {string} color - Player's token color
   * @param {Boolean} active - Indicates player's turn if active === true;
   */
  constructor(name, id, color, active = false) {
    this.name = name;
    this.id = id;
    this.color = color;
    this.active = active;
    this.tokens = this.createTokens(21);
  }

  /**
   * Creates token objects for Player
   * @param     {number}    num - Number of token objects to be created
   * @returns   {Array}     An array of the newly created token objects
   */
  createTokens(num) {
    const tokens = [];
    for (let i = 0; i < num; i++) {
      tokens.push(new Token(i, this));
    }
    return tokens;
  }
}

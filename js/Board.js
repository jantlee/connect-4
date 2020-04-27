class Board {
  /**
   * Initializes the game grid for the Token objects
   * @constructor
   * @param {integer} rows
   * @param {integer} columns
   */

  constructor(rows = 6, columns = 7) {
    this.rows = rows;
    this.columns = columns;
    this.spaces = this.createSpaces();
  }
  /**
   * Generates 2D array of spaces
   * @return {Array} - An array of space objects
   */
  createSpaces() {
    const spaces = [];
    for (let i = 0; i < this.columns; i++) {
      const column = [];
      for (let j = 0; j < this.rows; j++) {
        column.push(new Space(i, j));
      }
      spaces.push(column);
    }
    return spaces;
  }
}

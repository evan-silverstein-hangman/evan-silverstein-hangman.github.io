
function Record(name, game){
    this.username = name;
    this.game = game;
    this.wrongGuesses = this.game.wrongGuesses.length;
}

export default Record;
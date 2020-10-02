class RpsGame {
  // Both players are sockets
  constructor(p1, p2) {
    this._players = [p1, p2]
    this._turns = [null, null]

    this._sendToPlayers('Rock Paper Scissors Starts!')

    this._players.forEach((player, idx) => {
      player.on('turn', turn => {
        this._onTurn(idx, turn)
      })
    })
  }

  _sendToPlayer(playerIndex, msg) {
    this._players[playerIndex].emit('message', msg)
  }

  _sendToPlayers(msg) {
    this._players.forEach((s) => s.emit('message', msg))
  }

  _onTurn(playerIndex, turn) {
    this._turns[playerIndex] = turn
    this._sendToPlayer(playerIndex, `You selected ${turn}`)
  }
}

module.exports = RpsGame
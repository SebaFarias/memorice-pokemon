const IdMatrix = require('./IdMatrix')

class PokeMatrix{
  constructor( rows, columns ){
    this.rows = rows
    this.columns = columns
    this.idMatrix = new IdMatrix( this.rows, this.columns, [ 1, 649 ])
    this.pokeMatrix = []
    this.generatePokeMatrix()
  }
  generatePokeMatrix(){
    this.newPokeMatrix()
    this.idMatrix.getAllPositions().map( position => {
      const [ row, column ] = position
      this.pokeMatrix[row][column] = {
        id: this.idMatrix.getMatrix()[row][column],
        state: 'hidden',
      }
    })
  }
  newPokeMatrix(){
    this.pokeMatrix = []
    for( let i = 0; i < this.rows; i++ ){
      this.pokeMatrix[i] = []
    }
  }
  getPokeMatrix(){
    return this.pokeMatrix
  }
  getPositions(){
    return this.idMatrix.getAllPositions()
  }
}

module.exports = PokeMatrix
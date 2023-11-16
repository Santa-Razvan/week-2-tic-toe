import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  rows: number[] = [0, 1, 2];
  cols: number[] = [0, 1, 2];
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  currentPlayer: string = 'X';
  winner: string | null = null;

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 'X' ? '0' : 'X';
  }

  makeMove(row: number, col: number) {

    if (this.board[row][col] === '' && !this.winner) {
      this.board[row][col] = this.currentPlayer;
      this.checkWinner();
      if (!this.winner) {
        this.switchPlayer();
      }
    }
  }

  checkWinner() {
    //let hasEmptyCell = false;

    for (let i = 0; i < 3; i++) {
      if (this.board[i][0] === this.board[i][1] && this.board[i][0] === this.board[i][2] && this.board[i][0] !== '') {
        this.winner = this.currentPlayer;
        this.showWinnerAlert();
        return;
      }
    }

    for (let i = 0; i < 3; i++) {
      if (this.board[0][i] === this.board[1][i] && this.board[0][i] === this.board[2][i] && this.board[0][i] !== '') {
        this.winner = this.currentPlayer;
        this.showWinnerAlert();
        return;
      }
    }

    if ((this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2] && this.board[0][0] !== '') ||
      (this.board[0][2] === this.board[1][1] && this.board[0][2] === this.board[2][0] && this.board[0][2] !== '')) {
      this.winner = this.currentPlayer;
      this.showWinnerAlert();
      return;
    }


    // nu functioneaza sa fac tie, daca implementez nu se mai schimba din X in 0
    // console.log functioneaza si printeaza dar switchPlayer() nu este apelat

    // for (let i = 0; i < 3; i++) {
    //   for (let j = 0; j < 3; j++) {
    //     if (this.board[i][j] === '') {
    //       hasEmptyCell = true;
    //       break;
    //     }
    //   }
    // }

    // if (!hasEmptyCell) {
    //   alert("It's a tie!");
    //   this.restartGame();
    // } else {
    //   console.log(hasEmptyCell);
    //   this.switchPlayer();
    // }
  }

  showWinnerAlert() {
    setTimeout(() => {
      alert("The winner is " + this.currentPlayer);
      this.restartGame();
    }, 200);
  }

  restartGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    this.winner = null;
    this.currentPlayer = 'X';
  }
}

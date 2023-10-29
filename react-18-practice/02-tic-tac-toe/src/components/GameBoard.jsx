export default function GmaeBoard({ onSelectSquare, board }) {
  //   const [gameBoard, setGameBoard] = useState(initialGrid);

  //   function handleSelectSquare(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //       const updateBoard = [
  //         ...prevGameBoard.map((innerArryay) => [...innerArryay]),
  //       ];
  //       updateBoard[rowIndex][colIndex] = activePlayerSymbol;
  //       return updateBoard;
  //     });

  //     onSelectSquare();
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol != null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}

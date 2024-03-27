export const initialTableState = Array(9).fill(0);

export const isValidPlay = (selectedCell, tableState) => tableState[selectedCell] === 0;

export const fullTable = (tableState) => !tableState.some(cell => cell === 0);

export const hasWinner = (tableState, lastCellId) => {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Colunas
        [0, 4, 8], [2, 4, 6]              // Diagonais
    ];

    for (let combination of winCombinations) {
        const [a, b, c] = combination;
        if (tableState[a] !== 0 &&
            tableState[a] === tableState[b] &&
            tableState[a] === tableState[c]) {
            return true;
        }
    }

    return false;
};

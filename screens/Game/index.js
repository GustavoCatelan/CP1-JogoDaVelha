import { useState } from 'react';
import {View,StyleSheet} from 'react-native';
import InvalidMoveDialog from '../../components/InvalidMoveDialog';
import EndGameDialog from '../../components/EndGameDialog';
import { initialTableState, fullTable, hasWinner } from './gameRules';
import GameTable from './Table';
import TurnRecorder from './TurnRecorder';

const PLAYERS_NAME = ['Jogador 1', 'Jogador 2']; 

const GameScreen = ({ navigation }) => {
  const [invalidMoveDialog, setInvalidMoveDialog] = useState(false);
  const [endGameDialog, setEndGameDialog] = useState(false);
  const [activePlayer, setActivePlayer] = useState(1);
  const [table, setTable] = useState(initialTableState); 

  const endGameText = hasWinner(table) ? `${PLAYERS_NAME[activePlayer - 1]} ganhou!` : 'Empate';

  const resetGame = () => {
    setTable(initialTableState);
    setActivePlayer(1);
    setEndGameDialog(false);
    setInvalidMoveDialog(false);
  };

  const onCellClicked = (cellId) => {
    if (table[cellId] !== 0 || hasWinner(table)) {
      setInvalidMoveDialog(true);
      return;
    }

    const newTable = [...table];
    newTable[cellId] = activePlayer;
    setTable(newTable);

    if (hasWinner(newTable) || fullTable(newTable)) {
      setEndGameDialog(true);
      return;
    }

    setActivePlayer(activePlayer === 1 ? 2 : 1);
  };

  return (
    <View style={styles.centeredView}>
      <TurnRecorder
        playerName={PLAYERS_NAME[activePlayer - 1]}
      />
      <GameTable
        onCellClicked={onCellClicked}
        tableState={table}
      />
      <EndGameDialog
        isOpen={endGameDialog}
        resultText={endGameText}
        onClickYes={resetGame}
        onClickNo={() => navigation.navigate('Home')}
      />
      <InvalidMoveDialog
        isOpen={invalidMoveDialog}
        onClickClose={() => setInvalidMoveDialog(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 22,
    margin: 20,
    backgroundColor: '#778899',
    borderRadius: 20,
    padding: 35,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
})

export default GameScreen;

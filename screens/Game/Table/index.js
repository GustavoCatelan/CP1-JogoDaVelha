import { View, StyleSheet } from 'react-native';
import Cell from './Cell';

const Table = ({ onCellClicked, tableState }) => {
    return (
        <View style={styles.table}>
            {
                tableState.map((cellState, id) => {
                    return(
                        <View style={styles.cellContainer} key={id}>
                            <Cell
                                onClick={onCellClicked}
                                id={id}
                                cellState={cellState}
                            />
                        </View>)
                })
            }
        </View>
    );
  }

const styles = StyleSheet.create({
    table: {
        width: "70%",
        aspectRatio: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        backgroundColor: 'white',
    },
    cellContainer: {
        width: '33.3%',
        aspectRatio: 1,
        borderWidth: 1,
        borderColor: '#111'
    }
})

export default Table;
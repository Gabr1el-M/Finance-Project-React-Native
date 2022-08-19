import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header/index';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Boleto: ',
        value: '300,90',
        date: '17/09/22',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix recebido: ',
        value: '2.900,00',
        date: '15/09/22',
        type: 1 // receita
    },
    {
        id: 3,
        label: 'Salario: ',
        value: '7.500,00',
        date: '20/09/22',
        type: 1 // receita
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Gabriel Martins" />
            <Balance saldo="9.250,00" gasto="- 527,00" />
            <Actions/>
            <Text style={styles.title}>Ultimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});

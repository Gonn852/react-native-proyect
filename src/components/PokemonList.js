import React from 'react'
import { FlatList, Text, StyleSheet, ActivityIndicator, Platform} from 'react-native'
import PokemonCard from './PokemonCard';

export default function PokemonList(props) {
    const {pokemons, loadPokemons, isNext} = props;
    const loadMore = () => {
        loadPokemons();
    }

    return (
        <FlatList
            data={pokemons}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item}) => <PokemonCard pokemon={item}/>}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={isNext && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={isNext && (<ActivityIndicator size="large" style={styles.spinner} color="#AEAEAE"/>)}
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 30 : 0
    },
    spinner: {
        marginTop: 20,
        marginBottom: Platform.Os === "android" ? 90 : 60
    }
})
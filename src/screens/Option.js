import React, { useState, useEffect, useContext } from "react";
import { ScrollView } from "react-native";
import { getPokemonDetailsApi } from "../api/main";
import Header from "../components/Pokemon/Header";
import Type from "../components/Pokemon/Type";
import Stats from "../components/Pokemon/Stats";
import Icon from "react-native-vector-icons/FontAwesome5";
import AuthContext from "../context/AuthContext";
import IconFavorite from "../components/Pokemon/IconFavorite";

export default function Option(props) {
  const {auth} = useContext(AuthContext);
  const {
    navigation,
    route: { params },
  } = props;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => ((auth && pokemon) && <IconFavorite id={pokemon.id}/>),
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="black"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params, pokemon]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);


  if (!pokemon) return null;


  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
      <Type types={pokemon.types}></Type>
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}

import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import {
  addPokemonFavoriteApi,
  isFavoritePokemonApi,
  removePokemonFavoriteApi,
} from "../../api/favorite";

export default function IconFavorite(props) {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const { id } = props;

  useEffect(() => {
    (async () => {
      try {
        const response = await isFavoritePokemonApi(id);
        setIsFavorite(response);
        console.log(isFavorite);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, isFavorite]);

  const addFavorite = async () => {
    try {
      const response = await addPokemonFavoriteApi(id);
      if (response) {
        setIsFavorite(true);
      }
    } catch (error) {
      setIsFavorite(false);
    }
  };

  const removeFavorite = async () => {
    try {
      const response = await removePokemonFavoriteApi(id);
      if (response) {
        setIsFavorite(false);
      }
    } catch (error) {}
  };

  return (
    <Icon
      name="heart"
      color="black"
      solid={isFavorite}
      size={20}
      style={{ marginRight: 20 }}
      onPress={isFavorite ? removeFavorite : addFavorite}
    />
  );
}

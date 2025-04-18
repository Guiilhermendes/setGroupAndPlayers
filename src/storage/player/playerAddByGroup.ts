import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { playersGetByGroup } from "./playersGetByGroup";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./PlayerStorageDTO";

export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
    try {
        const storedPlayers = await playersGetByGroup(group);
        const playersAlreadyExist = storedPlayers.filter(player => player.name === newPlayer.name); 

        if (playersAlreadyExist.length > 0) {
            throw new AppError('Essa pessoa já está cadastrada em um time aqui.')
        }

        const storage = JSON.stringify([...storedPlayers, newPlayer]);

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
    } catch(error) {
        throw error; 
    }
}

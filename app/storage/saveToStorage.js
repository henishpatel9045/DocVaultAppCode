import AsyncStorage from "@react-native-async-storage/async-storage";

const saveObj = async (key, obj) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(obj));
  } catch (error) {
    console.log(error);
  }
};

const getObj = async (key) => {
  let item;
  try {
    item = await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
  return JSON.parse(item);
};

const deleteObj = (key) => {
  try {
    AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(key);
  }
};

export { saveObj, getObj, deleteObj };

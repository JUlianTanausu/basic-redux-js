const updateWord = palabra => {
    console.log("palabra: ", palabra);
    return {
        type: 'UPDATE_WORD',
        payload: palabra
    }
}

export default updateWord;
export const deleteArray = (state, AddressBip) => {
    return state.filter(item => {
        if (item.AddressBip == AddressBip) {
            return false;
        }
        return true;
    })
}
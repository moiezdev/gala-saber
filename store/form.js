export const state = () => ({

    markedDateRange: { start: false, end: false },
    markedDates: [],
    multiMarkedDates: []
})

export const mutations = {
    
    setMarkedDateRange: (state, value) => state.markedDateRange = value,
    setMarkedDates: (state, value) => state.markedDates = value,
    setMultiMarkedDates: (state, value) => state.multiMarkedDates = value

}
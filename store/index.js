export const state = () => ({
    loading: false,
    pnrGenerated: false,
})

export const mutations = {
    setLoading(state) { state.loading = !state.loading },
    setPnrGenerated(state,value) {
      state.pnrGenerated = value
    }
}
export const strict = false

export function openModal (context, params) {
  context.commit('setModalOpen', params.open)
  context.commit('setItemId', params.id)
}

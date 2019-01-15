export function getTotalPrice (state) {
  let total = 0
  state.order_infos_content.articles.forEach(item => {
    total += item.price * item.quantity
  })
  // 5 shipping
  return total + 5
}

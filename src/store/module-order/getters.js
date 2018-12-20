export function getTotalPrice (state) {
  let total = 0
  state.order_infos_content.articles.forEach(item => {
    // TODO: * quantity
    total += item.price
  })
  // 5 shipping
  return total + 5
}

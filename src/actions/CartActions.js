// action creator function
// called from a UI button
export const addToCart = (item) => {

  // log makes this function impure but helpful for testing
  console.log(`ACTION: adding ${item} to cart`)
  return {
    type: 'ADD_ITEM',
    item
  }
}

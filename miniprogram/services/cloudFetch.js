async function fetchProducts(fromCollection, filter, fields) {
  const queryFilter = (filter == null) ? {} : filter;
  const db = wx.cloud.database();
  try {
    const res = await db.collection(fromCollection).where(queryFilter).get();
    const products = res.data.map(element => {
      return { fromCollection, ...element }
    });
    return products;
  } catch (e) {
    wx.showToast({
      title: '加载失败',
      icon: 'loading'
    });
    console.log(e);
  }
}

async function fetchOneProduct(fromCollection, prodId) {
  const db = wx.cloud.database();
  try {
    const res = await db.collection(fromCollection).doc(prodId).get();
    return res.data;
  } catch (e) {
    wx.showToast({
      title: '加载失败',
      icon: 'loading'
    });
  }
  console.log(e);
}

module.exports = { fetchProducts, fetchOneProduct };

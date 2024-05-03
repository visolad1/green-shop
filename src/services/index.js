export default class AppService {
  _base_link = "http://localhost:3000";

  async getResource(url) {
    const res = await fetch(`${this._base_link}${url}`);
    if (!res.ok) {
      throw new Error("Data not found");
    }
    const data = await res.json();
    return data;
  }

  getAllProducts() {
    return this.getResource("/products/");
  }

  getMainBannerData() {
    return this.getResource("/main_banner/");
  }
}

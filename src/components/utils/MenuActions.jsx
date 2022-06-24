import axios from "axios";

export class Menu {
  constructor(url) {
    this.url = url;
  }

  async get(url) {
    const res = await axios.get(url);
    return res.data;
  }

  async getAll() {
    let getUrl = this.url + "?estadoSubMenu=true&estadoItemMenu=true";
    let res = await axios.get(getUrl);
    let data = res.data;
    data.sort((a, b) => a.position - b.position);
    return data;
  }

  async getAllSubmenuItems(url, submenuID) {
    let data = await this.get(
      url + `?submenuID=${submenuID}&estadoSubMenu=true`
    );
    const items = data.map((item) => ({
      id: item.id,
      name: item.name,
      description: item.description,
      destination_uri: item.destination_uri,
      gif: item.gif,
      position: item.position,
    }));
    return items.sort((a, b) => a.position - b.position);
  }
}

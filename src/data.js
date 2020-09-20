export const categories = [
    "mobile-phones",
    "sofa-armchair",
    "pets-animals",
    "personal-goods",
    "services",
    "jobs",
    "tv-projector",
  ];
export const menuItems=[
    {
        title: "لوازم الکترونیکی",
        iconUrl:
          "https://s100.divarcdn.com/static/explorers/categories/electronic-devices.svg",
        route: "electronic-devices",
      },
      {
        title: "مربوط به خانه",
        iconUrl:
          "https://s100.divarcdn.com/static/explorers/categories/home-appliance.svg",
        route: "home-and-kitchen",
      },
      {
        title: "وسایل شخصی",
        iconUrl:
          "https://s100.divarcdn.com/static/explorers/categories/personal-stuff.svg",
        route: "personal-goods",
      }
]
  export const dataMenuLevelTwo = {
    electronicDevices: {
        title: { name: "لوازم الکترونیکی", route: "electronic-devices" },
        item: [
          { name: "موبایل و تبلت", route: "mobile-tablet" },
          { name: "رایانه", route: "computers" },
          { name: "کنسول، بازی‌ ویدئویی و آنلاین", route: "game-consoles" },
          { name: "صوتی و تصویری", route: "video-audio-device" },
          { name: "تلفن رومیزی", route: "telephone" },
        ],
      },
      homeAndKitchen: {
        title: { name: "مربوط به خانه", route: "home-and-kitchen" },
        item: [
          { name: "وسایل و تزئینات خانه", route: "home-decor-furniture" },
          { name: "وسایل آشپزخانه", route: "kitchen-appliances" },
          { name: "ابزار", route: "home-appliances" },
          { name: "ساختمان و حیاط", route: "building-garden" },
        ],
      },
      personalGoods: {
        title: { name: "وسایل شخصی", route: "personal-goods" },
        item: [
          { name: "کیف، کفش و لباس", route: "apparel" },
          { name: "تزیینی", route: "accessories" },
          { name: "آرایشی، بهداشتی و درمانی", route: "beauty-and-personal-care" },
          { name: "کفش و لباس بچه", route: "child-apparel" },
          { name: "وسایل بچه و اسباب بازی", route: "child-products" },
          { name: "لوازم التحریر", route: "stationery" },
        ],
      }
    }  
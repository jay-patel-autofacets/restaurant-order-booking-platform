import { IMain, TENANT_TYPE } from "../types";

export const getData = async (): Promise<IMain> => {
  await new Promise((resolve) => {
    setTimeout(() => resolve("got data...!"), 100);
  });
  return {
    meta: {
      type: TENANT_TYPE.RESTAURANT,
    },
    data: {
      info: {
        name: "Hours 24 Pitza",
        image: "https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=600",
        // ...
      },
      menu: {
        catagories: [
          {
            type: "PIZZA",
            items: [
              {
                image:
                  "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                name: "Chicago Style",
                price: 300,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },
              {
                image:
                  "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "Brick Oven Pizza",
                price: 400,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },
              {
                image:
                  "https://images.pexels.com/photos/842519/pexels-photo-842519.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "Italian Pizza",
                price: 350,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },
              {
                image:
                  "https://images.pexels.com/photos/2233348/pexels-photo-2233348.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "Neapolitan Pizza",
                price: 300,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },
              {
                image:
                  "https://images.pexels.com/photos/367915/pexels-photo-367915.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "California Pizza",
                price: 310,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },
              {
                image:
                  "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "New York Style Pizza",
                price: 300,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },
              {
                image:
                  "https://images.pexels.com/photos/1878346/pexels-photo-1878346.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "Sicilian Pizza",
                price: 500,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },
            ],
          },
          {
            type: "MOCKTAIL",
            items: [
              {
                image:
                  "https://images.pexels.com/photos/2093089/pexels-photo-2093089.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "Diabolo grenadine",
                price: 110,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },
              {
                image:
                  "https://images.pexels.com/photos/27215760/pexels-photo-27215760/free-photo-of-bramble.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "Summer cup",
                price: 110,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },

              {
                image:
                  "https://images.pexels.com/photos/24870647/pexels-photo-24870647/free-photo-of-a-cocktail-with-a-blueberry-and-orange-garnish.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "Fruit coolers",
                price: 110,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },

              {
                image:
                  "https://images.pexels.com/photos/27603870/pexels-photo-27603870/free-photo-of-limonade.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "Iced tea",
                price: 110,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },

              {
                image:
                  "https://images.pexels.com/photos/17612792/pexels-photo-17612792/free-photo-of-a-blue-and-green-drink-with-a-straw-and-a-garnish.jpeg?auto=compress&cs=tinysrgb&w=600",
                name: "Mojito",
                price: 110,
                currency: "INR",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
              },

            ],
          },
        ],
      },
    },
  };
};

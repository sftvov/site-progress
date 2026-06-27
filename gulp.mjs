export const font_names = '{Roboto,RobotoCondensed,Montserrat,CenturyGothic}';

// imageSet = {
//   quality: {
//     jpeg: 80,
//     png: 80,
//     webp: 80,
//     avif: 80,
//   },
//   sources: [
//     {
//       src: 'about/**/*.{jpg,jpeg,png}', // (путь) предполагается что это все внутри папки img
//       sizes: [
//         [1920, 600],
//         [1280, 400],
//         [768, 300],
//       ], // массив массивов (размеров), у вложенных массивов длина всегда 2, может быть 0 или 1 эделемент или оба сразу
//       retina: 2,
//       crop: true,
//       upscale: true,
//       quality: {
//         jpeg: 80,
//         png: 80,
//         webp: 80,
//         avif: 80,
//       },
//       format: {
//         webp: {
//           sizes: [
//             [1920, 600],
//             [1280, 400],
//             [768, 300],
//           ],
//           retina: 2,
//           crop: true,
//           upscale: true,
//           quality: 80,
//         },
//         avif: {
//           sizes: [
//             [1920, 600],
//             [1280, 400],
//             [768, 300],
//           ],
//           retina: 2,
//           crop: true,
//           upscale: true,
//           quality: 80,
//         },
//       },
//     },
//   ],
// };

export const imageSet = {
  sources: [
    {
      folder: '', // (путь) предполагается что это все внутри папки img
      src: '/**/*.{jpg,jpeg,png}', // (путь) предполагается что это все внутри папки img
      // sizes: [
      //   [1000, 0],
      //   [800, 400],
      //   [0, 400],
      // ],
      // retina: {
      //   scale: 2.4,
      //   step: 0.6,
      // },
      crop: true,
      upscale: true,
      transform: {
        webp: {
          // sizes: [
          //   [1000, 0],
          //   [800, 400],
          //   [0, 400],
          // ],
          retina: {
            scale: 2.4,
            step: 0.6,
          },
          crop: true,
          upscale: true,
        }
      }
    },
    {
      folder: '',
      src: '/**/*.svg',
      crop: false,
      upscale: false,
    },
  ],
};

//gulp changeNames
export const renameObj = {
  folder: '/img/inspections/items/',
  name: 'in-',
};
// gulp getHtml
export const pugFile = 'views/top-courses/_top-courses_corp';

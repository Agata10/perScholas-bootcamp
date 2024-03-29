let easyObj = {
  level1: {
    prop1: "value1",
    level2: {
      prop2: "value2",
      level3: {
        prop3: "value3",
        level4: {
          prop4: "value4",
          level5: {
            prop5: "value5",
          },
        },
      },
    },
  },
};

///access value 5 and console it
console.log(easyObj.level1.level2.level3.level4.level5.prop5);

const mediumObject = {
  level1: {
    level2: {
      level3: {
        level4: {
          level5: {
            level6: {
              level7: {
                level8: [
                  {
                    level9: {
                      level10: [
                        {
                          level11: {
                            level12: [
                              [],
                              {
                                level13: [
                                  {
                                    level14: {
                                      level15: [
                                        [],
                                        [],
                                        {
                                          level16: {
                                            level17: [
                                              {
                                                level18: {
                                                  level19: {
                                                    level20: "You made it!",
                                                  },
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
};

//access the value 'you made it' and console log it
console.log(
  mediumObject.level1.level2.level3.level4.level5.level6.level7.level8[0].level9
    .level10[0].level11.level12[1].level13[0].level14.level15[2].level16
    .level17[0].level18.level19.level20
);

const hardObj = {
  level1: {
    level2: [
      { level3: [] },
      {
        level3: {
          level4: [
            [],
            {
              level5: [
                {
                  level6: {
                    level7: [
                      [],
                      [],
                      {
                        level8: [
                          { level9: [] },
                          {
                            level9: [
                              {},
                              {
                                level10: [
                                  [],
                                  {
                                    level11: {
                                      level12: [
                                        { level13: [] },
                                        {
                                          level13: {
                                            level14: [
                                              [],
                                              [],
                                              {
                                                level15: {
                                                  level16: [
                                                    {
                                                      level17: {
                                                        level18: [
                                                          {
                                                            level19: [
                                                              {
                                                                level20:
                                                                  "You made it on hard object!",
                                                              },
                                                            ],
                                                          },
                                                        ],
                                                      },
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                        { level13: [] },
                                      ],
                                    },
                                  },
                                ],
                              },
                            ],
                          },
                          [],
                        ],
                      },
                      {},
                    ],
                  },
                },
              ],
            },
          ],
        },
      },
      { level6: [] },
    ],
  },
};

//access you made it
// console.log(
//   hardObj.level1.level2[1].level3.level4[1].level5[0].level6.level7[2].level8[1]
//     .level9[1].level10[1].level11.level12[1].level13.level14[2].level15
//     .level16[0].level17.level18[0].level19[0].level20
// );

// for (let key in hardObj) {
//   for (let subkey in hardObj[key]) {
//     for (let subsubkey in hardObj[key][subkey]) {
//       //console.log(hardObj[key][subkey][subsubkey]);
//       for (let subsubsubkey in hardObj[key][subkey][subsubkey]) {
//         console.log(hardObj[key][subkey][subsubkey][subsubsubkey]);

//         for (let subsubsubsubkey in hardObj[key][subkey][subsubkey][
//           subsubsubkey
//         ]) {
//           console.log(
//             hardObj[key][subkey][subsubkey][subsubsubkey][subsubsubsubkey]
//           );
//         }
//       }
//     }
//   }
//}

function findValue(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      console.log(value);
      return object[key];
    } else if (typeof object[key] === "object") {
      findValue(object[key], value);
    } else if (Array.isArray(object[key])) {
      object[key].forEach((element) => {
        if (element === value) {
          console.log(element);
          return element;
        }
        findValue(element, value);
      });
    }
  }
}

findValue(hardObj, "You made it on hard object!");

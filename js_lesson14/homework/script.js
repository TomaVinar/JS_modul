// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// function newDay (wakeUp) {
//     return new Promise ((resolve, reject)  => {
//         setTimeout(() => {
//             if (wakeUp) {
//                 resolve ('Hello world!');
//             }
//             reject('You oversleep');
//         }, 1000);
//     });
// }
//
// function breakfast (food) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (food) {
//                 resolve ('Eating');
//             }
//             reject ('Empty fridge');
//         }, 4000);
//     });
// }
//
// function morningRoutine (cleanTeethAndSoOn) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (cleanTeethAndSoOn) {
//                 resolve ('I/m ready');
//             }
//             reject ('I/m late');
//         },2000);
//     });
// }
//
// function workingDay (goOnWork) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (goOnWork) {
//                 resolve ('Working day start!');
//             }
//             reject ('LOOSER');
//         }, 3000);
//     });
// }
//
// function lunch (haveLunch) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (haveLunch) {
//                 resolve ('Om nom nom!!!');
//             }
//             reject ('I/m hungry!');
//         }, 150);
//     });
// }
//
//
// function sport (goToGym) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (goToGym) {
//                 resolve('Strong body - strong mind!');
//             }
//             reject ('Lazy ass!!');
//         },200);
//     });
// }
//
// function home (comeBackHome) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (comeBackHome) {
//                 resolve ('Home sweet home');
//             }
//             reject ('Continue working');
//         },1000);
//     });
// }
//
// function friends (haveFunWithFriends) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (haveFunWithFriends) {
//                 resolve ('Joy and happiness!!');
//             }
//             reject ('Boring');
//         },600);
//     });
// }
//
//
// function evening (getReadyToSleep) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (getReadyToSleep) {
//                 resolve ('Ready to sleep');
//             }
//             reject ('Lets dance till the morning!!!!!!!!');
//         }, 1500);
//     });
// }
//
// function night (sleeping) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (sleeping) {
//                 resolve ('Dreaming!');
//             }
//             reject ('Tomorrow will be a hard day((');
//         }, 800);
//     })
// }
//
// newDay(true)
// .then(letsStared => {
//     console.log(letsStared);
//     return breakfast('Eggs');
// })
// .then(dish => {
//     console.log(dish);
//     return morningRoutine('Done');
// })
// .then(routine => {
//     console.log(routine);
//     return workingDay('Work hard');
// })
// .then(doingJob => {
//     console.log(doingJob);
//     return lunch('Yami yami!!');
// })
// .then(dinner => {
//     console.log(dinner);
//     return sport(true);
// })
// .then(sportClasses => {
//     console.log(sportClasses);
//     return home('Yanki go home');
// })
// .then(comeBack => {
//     console.log(comeBack);
//     return friends('PARTY');
// })
// .then(partyTime => {
//     console.log(partyTime);
//     return evening('Midnight');
// })
// .then(tired => {
//     console.log(tired);
//     return night('Time to rest');
// })
// .then(finish => {
//     console.log(finish);
// })

// function awake (goodMorning, callback) {
//     setTimeout(() => {
//         if (goodMorning) {
//            callback (null, 'Wake up!!');
//             return
//         }
//         callback ('Bad day');
//     }, 3000)
// }
//
// function eat (food, cb) {
//     setTimeout(() => {
//         if (food) {
//             cb (null, 'Eating');
//             return
//         }
//         cb ('Im hungry!');
//     }, 400);
// }
//
// function morningRoutine (bath, cb) {
//     setTimeout(() => {
//         if (bath) {
//            cb (null, 'Get ready!');
//             return
//         }
//         cb ('Not ready');
//     }, 1500);
// }
//
// function work (workHard, cb) {
//     setTimeout(() => {
//         if (workHard) {
//             cb (null, 'Earn money');
//             return
//         }
//         cb ('Looser');
//     }, 1200);
// }
//
// function meeting (meetUp, cb) {
//     setTimeout(() => {
//         if (meetUp) {
//             cb (null, 'Result');
//             return
//         }
//         cb ('Very bad day');
//     }, 1000);
// }
//
// function dinner (haveLunch, cb) {
//     setTimeout(() => {
//         if (haveLunch) {
//             cb (null, 'Om nom nom');
//             return
//         }
//         cb ('Oooops');
//     }, 900);
// }
//
// function hobby (relax, cb) {
//     setTimeout(() => {
//         if (relax) {
//             cb (null, 'Feel better');
//             return
//         }
//         cb ('Stay at work');
//     })
// }
//
// function goHome (comeBack, cb) {
//     setTimeout(() => {
//         if (comeBack) {
//             cb (null, 'End of working day');
//             return
//         }
//         cb ('Damnnnnnn!');
//     }, 500);
// }
//
// function familyTime (family, cb) {
//     setTimeout(() => {
//         if (family) {
//             cb (null, 'Have a nice evening!');
//             return
//         }
//         cb ('Too tired!!');
//     }, 200);
// }
//
// function goToBed (timeToRest, cb) {
//     setTimeout(() => {
//         if (timeToRest) {
//             cb (null, 'Hoorey!');
//             return
//         }
//         cb ('Not the end((');
//     }, 1400);
// }
//
// function dreaming (goodDream, cb) {
//     setTimeout(() => {
//         if (goodDream) {
//             cb(null, 'Good night!');
//             return
//         }
//         cb ('Bad dream!');
//     }, 1600);
// }
//
// awake(true, (e, newDay) => {
//     if (e) {
//         console.log('Too late!', e);
//         return
//     }
//     console.log(newDay);
//
//     eat ('Salad', (e, breakfast) => {
//         if (e) {
//             console.log('HUNGRY', e);
//             return
//         }
//         console.log(breakfast);
//
//         morningRoutine('Cleaning', (e, shower) => {
//             if (e) {
//                 console.log('Oops', e);
//                 return
//             }
//             console.log(shower);
//
//             work(true, (e, workWorkWork) => {
//                 if (e) {
//                     console.log('Bad day', e);
//                     return
//                 }
//                 console.log(workWorkWork);
//
//                 meeting(true, (e, meetingDone) => {
//                     if (e) {
//                         console.log('Bad result',e);
//                         return
//                     }
//                     console.log(meetingDone);
//
//                     dinner(true, (e, eating) => {
//                         if (e) {
//                             console.log('Wanna eat',e);
//                             return
//                         }
//                         console.log(eating);
//
//                         hobby(true, (e, gymOpen) => {
//                             if (e) {
//                                 console.log('Lazy ass',e);
//                                 return
//                             }
//                             console.log(gymOpen);
//
//                             goHome('Get taxi', (e, comingHome) => {
//                                 if (e) {
//                                     console.log('Work, work, work',e);
//                                     return
//                                 }
//                                 console.log(comingHome);
//
//                                 familyTime('Spend time with family', (e, familyEvening) => {
//                                     if (e) {
//                                         console.log('Nooooo',e);
//                                         return
//                                     }
//                                     console.log(familyEvening);
//
//                                     goToBed(true, (e, rest) => {
//                                         if (e) {
//                                             console.log('Continue, baby!', e);
//                                             return
//                                         }
//                                         console.log(rest);
//
//                                         dreaming(true, (e, bestTime) => {
//                                             if (e) {
//                                                 console.log('Cant sleep', e);
//                                                 return
//                                             }
//                                             console.log(bestTime);
//                                         });
//                                     });
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

function dayStart (wakeUpBaby) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (wakeUpBaby) {
                resolve('Alarm 7:00');
            }
            reject ('Still sleeping');
        }, 1300);
    });
}

function cleanTeeth (procedures) {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            if (procedures) {
                resolve ('Done');
            }
            reject ('Bad cleaning');
        }, 700);
    });
}

function timeToEat (food) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (food) {
               resolve ('Yami');
           }
           reject ('No food');
       }, 3000);
    });
}

function getToWork (drivingCar) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (drivingCar) {
                resolve ('To be in time');
            }
            reject ('You are late');
        }, 100);
    })
}

function hardWorkingDay (working) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (working) {
                resolve('Good job');
            }
            reject ('Lazy day');
        }, 1000);
    })
}

function sportClass (doingSport) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (doingSport) {
                resolve('Good girl))');
            }
            reject('Bad girl');
        }, 2400);
    });
}

function getBackHome (goHome) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (goHome) {
                resolve ('End of the working day');
            }
            reject ('WTF');
        }, 800);
    });
}

function dog (playWithDog) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (playWithDog) {
                resolve('Time to rest');
            }
            reject ('DAMN');
        }, 1000);
    });
}

function movie (watchMovie) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (watchMovie) {
               resolve ('Time for movie');
           }
           reject ('Dont have time for movie');
       }, 100);
    });
}

function timeToRest (getReadyForSleeping) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (getReadyForSleeping) {
                resolve ('Thanks God');
            }
            reject ('Go on...');
        }, 2000);
    });
}

function sleeping (goToBed) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (goToBed) {
                resolve ('Good night');
            }
            reject ('Cant sleep');
        },600);
    });
}

async function newDay () {
    const start = await dayStart(true);
    const cleaning = await cleanTeeth('Done');
    const eatFood = await timeToEat(true);
    const go = await getToWork('Drive');
    const work = await hardWorkingDay(true);
    const sport = await sportClass(true);
    const home = await getBackHome(true);
    const pet = await dog(true);
    const supper = await timeToEat('Om nom nom');
    const rest = await movie(true);
    const eveningRoutine = await timeToRest(true);
    const goToBed = await sleeping(true);

    console.log(start);
    console.log(cleaning);
    console.log(eatFood);
    console.log(go);
    console.log(work);
    console.log(sport);
    console.log(home);
    console.log(pet);
    console.log(supper);
    console.log(rest);
    console.log(eveningRoutine);
    console.log(goToBed);
}

newDay();
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';

const form = document.querySelector('.form');

let numberClick = 0;

const createDataObj = () => {
  const formData = new FormData(form);

  const dataObj = {};
  formData.forEach((value, name) => {
    dataObj[name] = Number(value);
  });
  return dataObj;
};
const createPromise = ({ index, timeDelay }) => {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setInterval(() => {
      if (shouldResolve) {
        resolve({
          index,
          timeDelay,
        });
      }
      reject({
        index,
        timeDelay,
      });
    }, timeDelay);
  });
};

const cycleForCreate = ({ delay, step, amount }) => {
  let timeDelay = delay;

  for (let index = 1; index <= amount; index++) {
    timeDelay += step;

    createPromise({
      index,
      timeDelay,
    })
      .then(({ index, timeDelay }) => {
        Notiflix.Notify.success(
          ` При клике № ${numberClick} ${index}-й промис выполнен за ${timeDelay} мсек !!`,
        );
      })
      .catch(({ index, timeDelay }) => {
        Notiflix.Notify.failure(
          ` При клике № ${numberClick} ${index}-й промис откленен за ${timeDelay} мсек !!`,
        );
      });
  }
};

const onSubmitCreateP = e => {
  e.preventDefault();
  numberClick += 1;
  cycleForCreate(createDataObj());
};

form.addEventListener('submit', onSubmitCreateP);

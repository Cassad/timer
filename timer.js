let deadtime = '2020-03-22';

-----------------------------------------------------------------JS--------------------------------------------------------
//timeRemaing(incometime) - функция, возвращающая часы, минуты, секунды до установленной даты
//timer(id, incometime) - функция, запускающая один из таймеров(зависит от id) на странице
//updatetime - функция записывает секунды, часы и минуты на странице 
//timeInterval - функция обновляет значения часов, секунд и минут на странице
//clearInterval - останавливает обновление


function timeRemaning(incometime){
  let t = Date.parse(incometime) - Date.parse(new Date());

  let seconds = Math.floor(t/(1000) % 60),
      minutes = Math.floor(t/(1000 * 60) % 60),
      hours   = Math.floor(t/(1000 * 60 * 60));

  return {
    'seconds': seconds,
    'minutes': minutes,
    'hours': hours,
    'total': t
  };
}

function timer(id, incometime){
  let timer = document.querySelector(id),
      sec = timer.querySelector('.seconds'),
      min = timer.querySelector('.minutes'),
      hour = timer.querySelector('.hours'),
      timeInterval = setInterval(updateTime, 1000);

      function updateTime(){

        let t = timeRemaning(incometime);

        sec.textContent = t.seconds;
        min.textContent = t.minutes;
        hour.textContent = t.hours;

        if (t.total <= 0) {
          clearInterval(timeInterval);
        }
      }


}

timer('#timer', deadtime);

-----------------------------------------------HTML----------------------------------------------------
				<div class="timer-numbers" id="timer">
					<span class="hours">18</span>
					<span>:</span>
					<span class="minutes">20</span>
					<span>:</span>
					<span class="seconds">11</span>
				</div>

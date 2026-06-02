if(typeof VanillaCalendarPro !== 'undefined') {
  const { Calendar } = VanillaCalendarPro;

  // Русская локализация
  const ruLocale = {
    months: {
      short: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      long: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    },
    weekdays: {
      short: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      long: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
    },
  };

  // Форматирование даты
  function formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  }

  // Функция для одиночных календарей
  function createSingleCalendar(selector) {
    const calendars = [];
    const elements = document.querySelectorAll(selector);

    elements.forEach((element) => {
      const calendar = new Calendar(element, {
        inputMode: true,
        enableWeekNumbers: true,
        locale: ruLocale,
        selectedTheme: 'light',
        onChangeToInput(self) {
          if (!self.context.inputElement) return;
          if (self.context.selectedDates[0]) {
            self.context.inputElement.value = formatDate(self.context.selectedDates[0]);
            self.hide();
          } else {
            self.context.inputElement.value = '';
          }
        },
      });
      calendar.init();
      calendars.push(calendar);
    });

    return calendars;
  }

  // Функция для парных календарей (с зависимостью)
  function createPairedCalendars(startSelector, endSelector) {
    const pairs = [];
    const startElements = document.querySelectorAll(startSelector);
    const endElements = document.querySelectorAll(endSelector);

    // Проверяем, что количество элементов совпадает
    const pairCount = Math.min(startElements.length, endElements.length);

    for (let i = 0; i < pairCount; i++) {
      const startElement = startElements[i];
      const endElement = endElements[i];
      let endCalendar = null;

      // Календарь начала
      const startCalendar = new Calendar(startElement, {
        inputMode: true,
        dateMin: 'today',
        enableWeekNumbers: true,
        locale: ruLocale,
        selectedTheme: 'light',
        onChangeToInput(self) {
          if (!self.context.inputElement) return;
          if (self.context.selectedDates[0]) {
            const selectedDate = self.context.selectedDates[0];
            self.context.inputElement.value = formatDate(selectedDate);
            self.hide();

            // Обновляем dateMin для календаря окончания через set()
            if (endCalendar) {
              const endDate = endCalendar.context.selectedDates?.[0];
              const selectedDateObj = new Date(selectedDate);

              // Если текущая дата окончания стала меньше - очищаем
              if (endDate && endDate < selectedDate) {
                endCalendar.context.inputElement.value = '';
                endCalendar.context.selectedDates = [];
              }

              endCalendar.set({
                dateMin: selectedDate,
                selectedMonth: selectedDateObj.getMonth(),
                selectedYear: selectedDateObj.getFullYear(),
              });
            }
          } else {
            self.context.inputElement.value = '';
          }
        },
      });
      startCalendar.init();

      // Календарь окончания
      endCalendar = new Calendar(endElement, {
        inputMode: true,
        dateMin: new Date(),
        enableWeekNumbers: true,
        locale: ruLocale,
        selectedTheme: 'light',
        onChangeToInput(self) {
          if (!self.context.inputElement) return;
          if (self.context.selectedDates[0]) {
            const selectedDate = self.context.selectedDates[0];
            const startDate = startCalendar.context.selectedDates?.[0];

            self.context.inputElement.value = formatDate(selectedDate);
            self.hide();
          } else {
            self.context.inputElement.value = '';
          }
        },
      });
      endCalendar.init();

      pairs.push({ startCalendar, endCalendar });
    }

    return pairs;
  }

  // Функция для range календарей
  function createRangeCalendar(selector, monthsCount) {
    const calendars = [];
    const elements = document.querySelectorAll(selector);
    const isSingleMonth = monthsCount === 1;

    elements.forEach((element) => {
      const config = {
        inputMode: true,
        selectionDatesMode: 'multiple-ranged',
        enableWeekNumbers: true,
        locale: ruLocale,
        selectedTheme: 'light',
        onChangeToInput(self) {
          if (!self.context.inputElement) return;
          if (self.context.selectedDates.length >= 2) {
            const start = formatDate(self.context.selectedDates[0]);
            const end = formatDate(self.context.selectedDates[self.context.selectedDates.length - 1]);
            self.context.inputElement.value = `${start} — ${end}`;
          } else if (self.context.selectedDates.length === 1) {
            const start = formatDate(self.context.selectedDates[0]);
            self.context.inputElement.value = `${start} — ...`;
          } else {
            self.context.inputElement.value = '';
          }
        },
      };

      if (!isSingleMonth) {
        config.type = 'multiple';
        config.displayMonthsCount = monthsCount;
      }

      const calendar = new Calendar(element, config);
      calendar.init();
      calendars.push(calendar);
    });

    return calendars;
  }

  // Создаём все календари по классам
  const singleCalendars = createSingleCalendar('._date');
  const pairedCalendars = createPairedCalendars('._dateStart', '._dateEnd');
  const range1Calendars = createRangeCalendar('._range1', 1);
  const range2Calendars = createRangeCalendar('._range2', 2);
  const range3Calendars = createRangeCalendar('._range3', 3);
}

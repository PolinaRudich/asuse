export const menuItems = [
    {
        id: '1',
        text: 'Меню',
        expanded: true,
        items: [{
            id: '1_1',
            text: 'Абонент',
            rows: [
                {id: '1_1_1', row: ['Статус']},
                {id: '1_1_2', row: ['Код абонента']},
                {id: '1_1_3', row: ['Диапазон С', 'Диапазон По']},
                {id: '1_1_4', row: ['Наименование']},
                {id: '1_1_5', row: ['ИНН']},
                {id: '1_1_6', row: ['Диапазон С', 'Диапазон По']},
            ],
        }, {
            id: '1_2',
            text: 'Договор',
            rows: [
                {id: '1_2_1', row: ['Статус']},
                {id: '1_2_2', row: ['Номер договора']},
                {id: '1_2_3', row: ['Вид услуг']},
                {id: '1_2_4', row: ['Отделение']},
                {id: '1_2_5', row: ['Дата начала действия С', 'Дата начала действия По']},
                {id: '1_2_6', row: ['Дата прекращения действия С', 'Дата прекращения действия По']},
            ],
        }],
    },



]
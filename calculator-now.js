// Функция для определения тотемного животного
function calculateTotem() {
   // Получаем значения ответов
   const q1 = document.querySelector('input[name="q1"]:checked')?.value || 'forest';
   const q2 = document.querySelector('input[name="q2"]:checked')?.value || 'morning';
   const q3 = document.querySelector('input[name="q3"]:checked')?.value || 'strength';
   const q4 = document.querySelector('input[name="q4"]:checked')?.value || 'walk';

   // Логика определения животного
   let animal = '';
   let description = '';
   let emoji = '';

   // Комбинации ответов
   if (q1 === 'forest' && q3 === 'strength') {
      animal = 'Медведь';
      emoji = '🐻';
      description = 'Ты — хозяин леса! Сильный, уверенный в себе, но в душе добрый и любишь мёд.';
   } else if (q1 === 'forest' && q3 === 'cunning') {
      animal = 'Лиса';
      emoji = '🦊';
      description = 'Хитрая лиса! Ты находчив, умеешь находить выход из любой ситуации.';
   } else if (q1 === 'mountain' && q3 === 'wisdom') {
      animal = 'Орёл';
      emoji = '🦅';
      description = 'Орёл — ты смотришь на мир свысока, мудр и свободолюбив.';
   } else if (q1 === 'mountain' && q3 === 'strength') {
      animal = 'Горный козёл';
      emoji = '🐐';
      description = 'Ты упрям, но только в хорошем смысле! Всегда добиваешься своих целей.';
   } else if (q1 === 'sea' && q2 === 'night') {
      animal = 'Дельфин';
      emoji = '🐬';
      description = 'Дельфин — ты дружелюбный, умный и любишь быть в центре внимания.';
   } else if (q1 === 'sea' && q4 === 'friends') {
      animal = 'Кит';
      emoji = '🐋';
      description = 'Кит — огромное сердце, ты заботишься о близких и создаёшь уют.';
   } else if (q1 === 'savanna' && q3 === 'strength') {
      animal = 'Лев';
      emoji = '🦁';
      description = 'Лев — прирождённый лидер! Ты смелый, благородный и любишь быть первым.';
   } else if (q1 === 'savanna' && q4 === 'learn') {
      animal = 'Жираф';
      emoji = '🦒';
      description = 'Жираф — ты видишь дальше других, любишь учиться и узнавать новое.';
   } else if (q2 === 'night' && q3 === 'wisdom') {
      animal = 'Сова';
      emoji = '🦉';
      description = 'Сова — мудрая и загадочная. Ты любишь ночь и ценишь знания.';
   } else if (q4 === 'walk' && q2 === 'morning') {
      animal = 'Заяц';
      emoji = '🐇';
      description = 'Заяц — ты быстрый, активный и всегда полон энергии по утрам!';
   } else {
      // По умолчанию
      const animals = [
         { name: 'Панда', emoji: '🐼', desc: 'Ты милый, добрый и любишь бамбук (или просто вкусно поесть).' },
         { name: 'Пингвин', emoji: '🐧', desc: 'Пингвин — ты элегантный, любишь порядок и верен в дружбе.' },
         { name: 'Слон', emoji: '🐘', desc: 'Слон — ты надёжный, мудрый и у тебя отличная память.' },
         { name: 'Обезьяна', emoji: '🐒', desc: 'Обезьяна — ты весёлый, активный и любишь приключения.' }
      ];
      const random = animals[Math.floor(Math.random() * animals.length)];
      animal = random.name;
      emoji = random.emoji;
      description = random.desc;
   }

   // Показываем результат
   document.getElementById('totemResult').innerHTML = emoji + ' ' + animal;
   document.getElementById('totemDescription').innerHTML = description;

   // Добавляем эффект появления
   const resultBlock = document.getElementById('totemResult');
   resultBlock.style.transform = 'scale(1.1)';
   setTimeout(() => {
      resultBlock.style.transform = 'scale(1)';
   }, 200);
}

// Функция для показа результата при отправке формы
function showTotemResult() {
   calculateTotem();
}
const domain = process.env.NODE_ENV === 'development' ? "http://localhost:3000" : "https://play.darkmaterial.space"
export const default_code = `<!--
  Можете редактировать шаблон, или удалить весь код и начать с нуля.
  Здесь TailwindCSS - работает. Автозаполнение для TailwindCSS не работает.
-->
<div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black py-6 sm:py-12">
  <div class="relative flex flex-col items-center gap-2 max-w-xl p-6 mx-auto rounded-lg w-full">
    <img src="${domain}/wecode-dark.svg" width="42" height="42" class='mb-4' />
    <span class='text-center text-3xl font-bold text-white'>Weecode Play</span>
    <h2 class='text-neutral-400 font-bold text-lg text-center'>by Darkmaterial</h2>
    <span class='text-neutral-400 mt-8'>Ваше пространство для развлечения</span>
    <div class='h-16' />
  </div>
  <div class='w-full grid grid-cols-2 gap-2'>
    <div class='relative w-full h-48 p-4 flex flex-col items-center justify-center gap-4 rounded-md border border-neutral-900 hover:border-white transition-colors'>
      <a class='absolute w-full h-full' href="https://darkmaterial.space" target="_blank"></a>
      <img src="${domain}/dm-star-dark.svg" width="48" height="48" />
      <div class='w-fit h-fit flex items-center justify-center gap-2 flex-col'>
        <span class='text-white font-semibold text-center'>Darkmaterial</span>
        <span class='text-xs text-neutral-400 text-center'>Место, где живут <br /> разработка и дизайн</span>
      </div>
    </div>
    <div class='relative w-full h-48 p-4 flex flex-col items-center justify-center gap-4 rounded-md border border-neutral-900 hover:border-white transition-colors'>
      <a class='absolute w-full h-full' href="https://weecode.darkmaterial.space" target="_blank"></a>
      <img src="${domain}/wecode-dark.svg" width="48" height="48" />
      <div class='w-fit h-fit flex items-center justify-center gap-2 flex-col'>
        <span class='text-white font-semibold text-center'>Weecode</span>
        <span class='text-xs text-neutral-400 text-center'>Пишите и храните свой здесь</span>
      </div>
    </div>
  </div>
</div>`
export const default_css_code = `
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

`
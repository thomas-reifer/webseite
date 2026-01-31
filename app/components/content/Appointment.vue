<template>
    <section class="py-30 bg-accent text-center">
        <u-container class="max-w-sm prose">
            <Header1>Erstgespräch vereinbaren</Header1>
            <div class="max-w-sm mx-auto mt-4">
                <div class="">
                    <UButton to="/termin" size="xl" class="justify-center w-full">Termin anfragen</UButton>
                </div>
                <div class="flex items-center my-3">
                    <div class="h-[1px] mt-1 bg-[#202020]  flex-1"></div>
                    <span class="px-2 text-neutral">oder</span>
                    <div class="h-[1px] mt-1 bg-[#202020] flex-1"></div>
                </div>
                <div>
                    <span class="block">per Telefon: <a href="tel:+43 68181100843" class="text-primary hover:underline">+43 681 81100843</a></span>
                    <span class="block">per E-Mail: <a href="mailto:info@thomasreifer.com">info@thomasreifer.com</a></span>
                </div>
            </div>
        </u-container>
    </section>
</template>
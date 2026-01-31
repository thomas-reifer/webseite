<template>
    <section class="my-30">
        <u-container>
            <div class="grid grid-cols-2 md:grid-cols-3   grid-rows-3 md:grid-rows-2 gap-4 max-h-80">
                <SkillCard class="order-1" title="Evidenzbasiert" description="fundierte psychologische und psychotherapeutische Arbeitsweise" />
                <div class="col-span-2 md:col-span-1 md:row-span-2 order-3 md:order-2">
                    <NuxtImg fit="fill" src="/therapie.JPG" class="rounded-lg w-full h-full object-cover" />
                </div>
                <SkillCard class="order-2 md:order-3" title="Zielorientiert" description="nachvollziehbar und an Ihre Situation orientiert" icon="heroicons-heart" />
                <SkillCard class="order-4" title="Vertraulich" description="vertraulich, diskret und professionell" icon="heroicons-banknotes" />
                <SkillCard class="order-5" title="Flexibel" description="persönlich in Bozen (Südtirol) oder ortsunabhängig online" icon="heroicons-globe-alt" />
            </div>
        </u-container>
    </section>
</template>
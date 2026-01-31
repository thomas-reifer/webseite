<template>
    <u-container>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col justify-center gap-6 order-2 md:order-1">
                <div class="flex-1"></div>
                <h1 class="text-3xl ">Psychologe in Bozen – Orientierung und Stabilität in belastenden Zeiten</h1>
                <span class="max-w-xl">Als Psychologe und therapeutisch tätige Fachperson in Bozen (Südtirol) begleite ich Erwachsene und Jugendliche bei psychischen Belastungen – z. B. bei anhaltender Überlastung, depressiver Verstimmung oder Ängsten. In einem klar strukturierten und vertraulichen Rahmen entwickeln wir Orientierung, stärken Stabilität und erarbeiten konkrete nächste Schritte. Gespräche sind in Bozen oder online möglich.</span>
                <div>
                    <u-button to="/termin" class="rounded-3xl" size="xl">Termin anfragen</u-button>
                </div>
                <div class="flex flex-1 flex-col gap-2">
                    <div id="bottomnav" class="mt-auto flex items-center">
                        <span>Erwachsene</span>
                        <u-icon class="ml-1" name="heroicons-chevron-right" />
                    </div>
                    <div class="flex items-center">
                        <span>Jugendliche</span>
                        <u-icon class="ml-1" name="heroicons-chevron-right" />
                    </div>
                </div>
            </div>
            <div class="order-1 md:order-2">
                <nuxt-img class="rounded-4xl" src="/portrait.jpg"></nuxt-img>
            </div>
        </div>
    </u-container>

</template>
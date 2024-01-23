<template>
    <q-layout class="card" style="color: #4d4d4d;">
        <q-card class="col" style="box-shadow: none; background-color: #f5f5f5;">
            <q-card-section style="border-bottom: 1px solid #4d4d4d41;">
                <q-card-title style="font-size: 20px; font-weight: bold;"> HAKKIMIZDA </q-card-title>
            </q-card-section>
            
        </q-card>
        <q-card style="text-align: center; box-shadow: none; background-color: #f5f5f5;">
            <q-card-section>
                <q-card-title class="hakkimizda" > Hakkımızda </q-card-title>
                <p> Bizimki kitaba olan tutkulu bir yolculuk, bizimki 40 yıl önce başlayan okuma ve okurlara en güzel kitapları ulaştırma heyecanı, bizimki her ulaştırdığımız kitapta bir aydınlanma yolculuğuna sebep olma mutluluğu! 
                    Kitaplar bize 40 yıldır mutluluk verdi, biz de mutluluğumuzu daha çok kitapseverle paylaşmak için yeni kitabevleri açtık, Avrupa'nın en büyük kitabevinde milyonlarca kitapseveri ağırladık. 
                    Sonrasında da 2015 yılından itibaren web sitemiz üzerinden ülkemizin her köşesindeki kitapseverlere kitap göndermeye başladık. Bugüne dek on milyonlarca kitabı milyonlarca kitapsevere ulaştırmanın mutluluğunu yaşıyor, 
                    BKMKİTAP ailesi olarak sizlere daha iyi hizmet verebilmek için her gün samimiyetle çalışıyoruz. Keyifli okumalar dileriz.
                </p>
            </q-card-section>
            <q-card-section>
                <q-card-title class="vizyon" style="text-align: center;"> Vizyon</q-card-title>
                <p>  Kitapları ekonomik ve hızlı bir şekilde sunan, kaliteli müşteri hizmetleri ile kitapseverleri mutlu eden, ülkemizin aydınlanmasına katkı yapan, sektörün lider markası olmak.</p>
            </q-card-section>
            <q-card-section>
                <q-card-title class="misyon"> Misyon </q-card-title>
                <p>
                    Kitapları ekonomik fiyatla, hızlı gönderiyle ve kaliteli müşteri iletişimiyle sunarak yediden yetmişe tüm kitapseverleri mutlu etmek, 
                    kitap okumanın yaygınlaşmasına öncülük ederek ülkemizin kültürel gelişimine destek vermek
                </p>
            </q-card-section>
            <q-card-section>
                <q-card-title class="degerler"> Değerler </q-card-title>
            </q-card-section>
            <q-card-section>
                <q-card-title class="deger1"> Kitapseverlerin Memnuniyeti </q-card-title>
                <p>
                    Kitapseverler yaşam sebebimizdir, onlarla dünyanın daha güzel bir yer olacağına inanıyoruz.
                    Kitapseverlere kaliteli hizmet sunmak temel şirket felsefemizdir.
                    Markamızın geçmişinden bugüne oluşturduğumuz güven en önemli sermayemizdir.
                    İşlerimizi ilk günkü esnaf samimiyeti ile gönülden sürdürmeye gayret ediyoruz.
                </p>
            </q-card-section>
            <q-card-section>
                <q-card-title class="deger2"> Sevgi, Saygı ve Paylaşım </q-card-title>
                <p>
                    Kitap sevgisi bizi var eden temel anlayışımızdır.
                    Yüzyıllardır kitaplarla taşınan bilgiye ve bilime gönülden saygılıyız.
                    Çalışanlarımızı önemseriz, onları saygın birer bilgi elçisi olarak görürüz.
                    Farklılıklara saygı duyarız ve gelişim için farklı görüşleri yaşatmaya çalışırız.
                    Marka ve çalışanları olarak mütevazi davranışları benimseriz.
                    Doğa ve hayvan sevgisi ile geleceğin daha güzel olacağına inanırız.
                    Yardımseverliğe inanıyor, ihtiyacı olanlara kitap göndermek idealine gönülden destek veriyoruz.
                    Ülkemizi çok seviyor, ülkemizin kültürel gelişimine katkı için idealistçe çalışıyoruz.
                </p>
            </q-card-section>
            <q-card-section>
                <q-card-title class="deger3"> Mükemmel Hizmet Sunumu </q-card-title>
                <p>
                    Operasyonel olarak mükemmel bir hizmet sunmaya azami çaba gösteririz.
                    Verimliliği esas alırız, verimli olmayan tüm süreçleri elimine ederiz.
                    Sonuç odaklı çalışma tarzını benimser, işlerimizi bu ilkeye göre planlarız.
                    Doğru sonuçlara ulaşmak için yalınlık ilkesine inanırız.
                    Yenilikçilik gelişimimizin ana kaynağıdır.
                    Ekip çalışmasına önem veririz, kendini ve ekibini sürekli geliştiren çalışanlarımızla yarınlara ilerleriz.
                    Sektörümüze öncülük ederek kitapların yaygın okunmasını hedefleriz.
                </p>
            </q-card-section>
        </q-card>
    </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'TheHakkimizda',
    components: {
    },
    setup() {
        return {
        };
    },
});
</script>

<style scoped>
.card {
    color: #f5f5f5;
    
}
.hakkimizda {
    
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
    
}
.vizyon {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
}
.misyon {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
}
.degerler {
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
}
.deger1 {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    margin: 10px;
}
.deger2 {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    margin: 10px;
}
.deger3 {
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    margin: 10px;
}

</style>
